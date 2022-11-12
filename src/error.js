const express = require("express");

//Handling errors
exports.handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    title: "",
    description: "",
    duration: "",
  };

  //validate errors
  if (err.message.includes("User validation failed"))
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });

  return errors;
};
