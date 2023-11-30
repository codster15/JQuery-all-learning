var collection = (() => {
  return {
    /**
     * Function to calculate the sum of two values
     * @param {number/string} firstvalue
     * @param {number/string} secondvalue
     * @returns result Sum of numbers
     */

    doAddition(firstvalue, secondvalue) {
      var result;

      firstvalue = parseInt(firstvalue);
      secondvalue = parseInt(secondvalue);

      result = firstvalue + secondvalue;

      return result;
    },

    /**
     * Function to calculate the subtraction of two values
     * @param {number/string} firstvalue
     * @param {number/string} secondvalue
     * @returns result subtraction of numbers
     */
    dosubstraction(firstvalue, secondvalue) {
      var result;

      firstvalue = parseInt(firstvalue);

      secondvalue = parseInt(secondvalue);

      result = firstvalue - secondvalue;

      return result;
    },

    /**
     * Function to calculate the Multiplication of two values
     * @param {number/string} firstvalue
     * @param {number/string} secondvalue
     * @returns result Multiplication of numbers
     */

    doMultiplication(firstvalue, secondvalue) {
      var result;

      firstvalue = parseInt(firstvalue);
      secondvalue = parseInt(secondvalue);

      result = firstvalue * secondvalue;

      return result;
    },

    /**
     * Function to calculate the divison of two values
     * @param {number/string} firstvalue
     * @param {number/string} secondvalue
     * @returns result divison of numbers
     */

    dodivision(firstvalue, secondvalue) {
      var result;

      firstvalue = parseInt(firstvalue);
      secondvalue = parseInt(secondvalue);

      result = firstvalue / secondvalue;

      return result;
    },
  };
})();
