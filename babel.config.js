

module.exports = function(api) {
    api.cache(true);
    return {
      
      plugins: [
        "module-resolver", {
          root: ["./src/"],
          alias: {
           '@utils': './src/infra/*',
           '@database': './src/modules/*',
           '@database': './src/DTOs/*'
          }
        }
      ]
  
    };  
  };