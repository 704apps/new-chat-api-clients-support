

module.exports = function(api) {
    api.cache(true);
    return {
      
      plugins: [
        "module-resolver", {
          root: ["./src/"],
          alias: {     

           '@utils': './src/infra/*',
           '@modules': './src/modules/*',
           '@error': './src/error/*',
           '@main': './src/main/*'

          }
        }
      ]
  
    };  
  };