"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetSearchByWordOrPhraseController = void 0;
require("reflect-metadata");
var _GetSearchByWordOrPhraseUseCase = require("./GetSearchByWordOrPhraseUseCase");
var _tsyringe = require("tsyringe");
class GetSearchByWordOrPhraseController {
  async handle(request, response) {
    try {
      const {
        word_phrase,
        supportId
      } = request.query;
      if (!word_phrase || !supportId) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      const getSearchProjectUseCase = _tsyringe.container.resolve(_GetSearchByWordOrPhraseUseCase.GetSearchByWordOrPhraseUseCase);
      const messages = await getSearchProjectUseCase.getSearchByWordOrPhrase(String(word_phrase), String(supportId));
      return response.status(200).json(messages);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }

  // async handle(request: Request, response: Response): Promise<Response> {
  //     try {
  //         const { word_phrase, supportId } = request.query 

  //         if( !word_phrase || !supportId){
  //             return response.status(400).json({ error: "Missing required fields" });
  //         }

  //         const getSearchProjectUseCase =   container.resolve(GetSearchByWordOrPhraseUseCase)

  //         const messages = await getSearchProjectUseCase.getSearchByWordOrPhrase( String(word_phrase), String(supportId));

  //         return response.status(200).json(messages)

  //     } catch (error) {
  //         response.status(400).json({error })

  //     }
  // }
}
exports.GetSearchByWordOrPhraseController = GetSearchByWordOrPhraseController;