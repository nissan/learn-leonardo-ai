const sdk = require('api')('@leonardoai/v1.0#28807z41owlgnis8jg');

sdk.getUserSelf()
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
