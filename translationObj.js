const altText = {
  english: {
    firstPointDescription: {
      0: "A point is located between 1 and 2 and is labeled 1.3 repeating. The point appears to be closer to 1 than 2...",
      1: "A point is located between 1.3 and 1.4 and is labeled 1.3 repeating. The point appears to be closer to 1.3 than 1.4...",
      2: "A point is located between 1.33 and 1.34 and is labeled 1.3 repeating. The point appears to be closer to 1.33 than 1.34...",
      3: "A point is located between 1.333 and 1.334 and is labeled 1.3 repeating. The point appears to be closer to 1.333 than 1.334...",
      4: "A point is located between 1.3333 and 1.3334 and is labeled 1.3 repeating. The point appears to be closer to 1.3333 than 1.3334...",
      5: "A point is located between 1.33333 and 1.33334 and is labeled 1.3 repeating. The point appears to be closer to 1.33333 than 1.33334...",
      6: "A point is located between 1.333333 and 1.333334 and is labeled 1.3 repeating. The point appears to be closer to 1.333333 than 1.333334...",
      7: "A point is located between 1.3333333 and 1.3333334 and is labeled 1.3 repeating. The point appears to be closer to 1.3333333 than 1.3333334...",
      8: "A point is located between 1.33333333 and 1.33333334 and is labeled 1.3 repeating. The point appears to be closer to 1.33333333 than 1.33333334...",
      9: "A point is located between 1.333333333 and 1.333333334 and is labeled 1.3 repeating. The point appears to be closer to 1.333333333 than 1.333333334...",
      10: "A point is located between 1.3333333333 and 1.3333333334 and is labeled 1.3 repeating. The point appears to be closer to 1.3333333333 than 1.3333333334...",
    },
    secondPointDescription: {
      0: "A point is located between 1 and 2 and is labeled 1.34... The point appears to be closer to 1 than 2...",
      1: "A point is located between 1.3 and 1.4 and is labeled 1.34... The point appears to be closer to 1.3 than 1.4...",
      2: "A point is located at 1.34...",
      3: "A point is located at 1.34...",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
    },
    comparisonDescirption: {
      0: "The points appear to be at the same location and are closer to 1 than 2...",
      1: "The point labeled 1.3 repeating is slightly to the left of the point labeled 1.34...",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
    },
    firstSentenceButtonClick: "The number line zooms in to show 11 evenly spaced tick marks from " + xMin + " to " + xMax + "...", //note this includes variables inside it
    secondPointNotShown: "The point labeled 1.34 is not shown with the given range of the number line.", //not a variable in CL right now
    resetString: "The number line has been reset.", //not a variable in CL right now
    hidden13: "The point labeled 1.3 repeating is hidden.", //not a variable in CL right now
    notShown134: "The point labeled 1.34 falls outside of the range shown on the number line.", //not a variable in CL right now
    hidden134: "The point labeled 1.34 is hidden.", //not a variable in CL right now
    firstSentence: "A number line with 11 evenly spaced tick marks from " + xMin + " to " + xMax + "...", //this is a variable
  },
  spanish: {
    firstPointDescription: {
      0: "Un punto está ubicado entre 1 y 2 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1 que de 2...",
      1: "Un punto está ubicado entre 1.3 y 1.4 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1.3 que de 1.4...",
      2: "Un punto está ubicado entre 1.33 y 1.34 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1.33 que de 1.34...",
      3: "Un punto está ubicado entre 1.333 y 1.334 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1.333 que de 1.334...",
      4: "Un punto está ubicado entre 1.3333 y 1.3334 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1.3333 que de 1.3334...",
      5: "Un punto está ubicado entre 1.33333 y 1.33334 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1.33333 que de 1.33334...",
      6: "Un punto está ubicado entre 1.333333 y 1.333334 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1.333333 que de 1.333334...",
      7: "Un punto está ubicado entre 1.3333333 y 1.3333334 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1.3333333 que de 1.3333334...",
      8: "Un punto está ubicado entre 1.33333333 y 1.33333334 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1.33333333 que de 1.33333334...",
      9: "Un punto está ubicado entre 1.333333333 y 1.333333334 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1,333333333 que de 1,333333334...",
      10: "Un punto está ubicado entre 1.3333333333 y 1.3333333334 y está etiquetado como 1.3 repetido. El punto parece estar más cerca de 1,3333333333 que de 1,3333333334...",
    },
    secondPointDescription: {
      0: "Un punto está ubicado entre 1 y 2 y está etiquetado como 1.34... El punto parece estar más cerca de 1 que de 2...",
      1: "Un punto está ubicado entre 1.3 y 1.4 y está etiquetado como 1.34... El punto parece estar más cerca de 1.3 que de 1.4...",
      2: "Un punto se encuentra a 1.34...",
      3: "Un punto se encuentra a 1.34...",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
    },
    comparisonDescirption: {
      0: "Los puntos parecen estar en la misma ubicación y están más cerca de 1 que de 2...",
      1: "El punto etiquetado como 1.3 repetido está ligeramente a la izquierda del punto etiquetado como 1.34...",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
    },
    firstSentenceButtonClick:
      "La recta numérica se acerca para mostrar 11 marcas de verificación espaciadas uniformemente desde " + xMin + " hasta " + xMax + "...", //note this includes variables inside it
    secondPointNotShown: "El punto etiquetado como 1.34 no se muestra con el rango dado de la recta numérica.", //not a variable in CL right now
    resetString: "La recta numérica se ha restablecido.", //not a variable in CL right now
    hidden13: "El punto etiquetado como 1.3 repetido está oculto.", //not a variable in CL right now
    notShown134: "El punto etiquetado como 1.34 cae fuera del rango que se muestra en la recta numérica.", //not a variable in CL right now
    hidden134: "El punto etiquetado como 1.34 está oculto.", //not a variable in CL right now
    firstSentence: "Una recta numérica con 11 marcas espaciadas uniformemente desde " + xMin + " hasta " + xMax + "...", //this is a variable
  },
};
