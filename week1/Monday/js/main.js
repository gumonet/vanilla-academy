let convert = ( function () {
    
    /**
     * Convert grams to miligrams
     * @param { Number } grams The grams to convert
     **/
    function gramsToMiligrams( grams ) {
        return grams * 1000;
    }

     /**
     * Convert grams to Kilograms
     * @param { Number } grams The grams to convert
     **/
      function gramsToKilograms( grams ) {
        return grams / 1000;
    }

    /**
     * Convert Kilograms to Grams
     * @param { Number } kilograms The Kilograms to convert
     **/
      function kilogramsToGrams( kilograms ) {
        return kilograms * 1000;
    }

    /**
     * Convert Kilograms to miligrams
     * @param { Number } kilograms The Kilograms to convert
     **/
       function kilogramsToMiligrams( kilograms ) {
        return kilograms * 1000 * 1000;
    }

    /**
     * Convert Miligrams to Grams
     * @param { Number } milligrams The Milligrams to convert
     **/
     function milligramsToGrams( milligrams ) {
        return milligrams / 1000;
    }

    /**
     * Convert Miligrams to Kilograms
     * @param { Number } milligrams The Milligrams to convert
     **/
     function milligramsToKilograms( milligrams ) {
        return milligrams / 1000 / 1000;
    }

    return { gramsToMiligrams,
        gramsToKilograms,
        kilogramsToGrams,
        kilogramsToMiligrams,
        milligramsToGrams,
        milligramsToKilograms, }
})();
