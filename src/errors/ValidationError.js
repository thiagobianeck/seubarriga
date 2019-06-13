module.exports = function ValidateionError(message) {
  this.name = 'ValidationError';
  this.message = message;
};
