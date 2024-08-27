"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;
var _jsonwebtoken = require("jsonwebtoken");
var _AppError = require("../../../../error/AppError");
var _UserRepository = require("../../../../modules/accounts/infra/typeorm/repositories/UserRepository");
var _tsyringe = require("tsyringe");
var _GetOneMessagesUseCase = require("../../../../modules/messages/useCases/getOneMessage/GetOneMessagesUseCase");
var _GetIfInaugurationUseCase = require("../../../../modules/messages/useCases/getIfInauguration/GetIfInaugurationUseCase");
async function compareToken(pc, tk) {
  if (pc !== tk) {
    return false;
  }
  return true;
}
async function ensureAuthenticated(request, response, next) {
  try {
    const authHeader = request.headers.authorization;
    console.log('veio aqui no auteo');
    if (!authHeader) {
      throw new _AppError.AppError('Token missing', 401);
    }
    console.log('veio aqui no aute');
    const [, token] = authHeader.split(' ');
    //try {
    const {
      sub: userId
    } = (0, _jsonwebtoken.verify)(token, process.env.SECRET_JWT);
    console.log('veio aqui no aute4');
    const userRepository = new _UserRepository.UserRepository();
    console.log('veio aqui no aute5');
    const user = await userRepository.findById(userId);
    console.log('veio aqui no aute6');
    if (!user) {
      throw new _AppError.AppError('User does not exist!', 401);
    }
    if (user.active === false) {
      throw new _AppError.AppError('This User has been deactivated!', 401);
    }
    console.log('veio aqui no aute7');
    response.locals.userId = userId;
    return next();
    // } catch (error) {
    //     if (error instanceof TokenExpiredError) {
    //         throw new AppError('Invalid token', 401);
    //       }

    //       // Outros erros podem ser tratados aqui
    //       throw new AppError('Invalid token.', 401);
    // }
  } catch (error) {
    if (error instanceof _jsonwebtoken.JsonWebTokenError) {
      try {
        const getIfInaugurationUseCase = _tsyringe.container.resolve(_GetIfInaugurationUseCase.GetIfInaugurationUseCase);
        const ifInauguration = await getIfInaugurationUseCase.getIfInauguration();
        console.log('veio aqui');
        if (ifInauguration.length === 0) {
          console.log('veio aqui2');
          return next();
        }
        const authHeader = request.headers.authorization;
        if (!authHeader) {
          console.log('veio aqui antes0');
          throw new _AppError.AppError('Token missing', 401);
        }
        const [, token] = authHeader.split(' ');
        console.log('veio aqui3');
        const id = request.params.id;

        //console.log('veio aqui antes')
        if (!id) {
          //console.log('veio aqui2222')
          const {
            projectId
          } = request.body; // Obtendo projectId do body
          // console.log(projectId)
          try {
            const tokenMatches = await compareToken(projectId, token);
            if (!tokenMatches) {
              //        console.log('veio aqui3:' + projectId)

              throw new _AppError.AppError('Invalid or expired token', 401);
            }
            return next();
          } catch (error) {
            //       console.log('error')
            return next(error);
            //throw new AppError('Invalid or expired token', 401,{error});
          }
        }
        //   console.log('veio aqui antes2')

        const getNewMessagesClientUseCase = _tsyringe.container.resolve(_GetOneMessagesUseCase.GetOneMessagesClientUseCase);
        const messages = await getNewMessagesClientUseCase.getOneMessage(Number(id));
        //   console.log('veio aqui antes3')

        const {
          projectId
        } = messages;
        //    console.log('veio aqui antes4')

        // Comparação com bcrypt
        //   console.log('veio aqui antes5.1')

        const tokenMatches = await compareToken(projectId, token);
        //   console.log('veio aqui antes5.2')

        if (!tokenMatches) {
          //          console.log('veio aqui antes6')

          throw new _AppError.AppError('Invalid or expired token', 401);
        }
        //     console.log('veio aqui antes7')

        return next();
      } catch (error) {
        try {
          const authHeader = request.headers.authorization;
          //       console.log('veio aqui inicio')
          if (!authHeader) {
            console.log('veio aqui antes0');
            throw new _AppError.AppError('Token missing', 401);
          }
          //      console.log('veio aqui depois')

          const [, token] = authHeader.split(' ');
          const id = request.params.id;
          try {
            //    console.log('veio aqui depois2')
            const tokenMatches = await compareToken(id, token);
            if (!tokenMatches) {
              //        console.log('veio aqui depois3')
              throw new _AppError.AppError('Invalid or expired token', 401);
            }
            //    console.log('veio aqui depois4')
          } catch (error) {
            //      console.log('veio aqui depois5 no erro')

            return next(error);
          }
          return next();
        } catch (error) {
          //console.log('veio aqui depois5 erro no try')
          return next(error);
          //throw new AppError('Invalid or expired token', 401,{error});
        }
        ;
      }
    } else {
      //   console.log(error
      //console.log('veio aqui depois5 erro no try final')

      return next(error);
    }
  }
}