const formatDate = (date: Date): string => { //methode pour afficher la date
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }

  export default formatDate;