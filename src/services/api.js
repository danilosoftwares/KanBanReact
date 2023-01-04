const GenerateNumber = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export default class Service {
  static postBoard = (payload) => {
    const all = [{ id:GenerateNumber(), password:payload.password, columns:[] }];
    localStorage.setItem('board',JSON.stringify(all));
    return {data:{result:{id:all[0].id}}};
  }
  static getBoard = async (id) => {
    let all = JSON.parse(localStorage.getItem('board'));
    const list = all && all.length > 0 ? all.filter((item)=>item.id===id) : [];
    return {data:{result:{columns:list[0].columns}}};
  }
  static deleteBoard = async (id, payload) => {
    localStorage.removeItem('board');
    return {data:{result:1}};
  };
  static postColumns = async (payload) => {    
    let all = JSON.parse(localStorage.getItem('board'));
    const list = all && all.length > 0 ? all : [];
    list[0].columns.push(payload);
    list[0].columns[list[0].columns.length-1].cards = [];
    list[0].columns[list[0].columns.length-1].id = GenerateNumber();
    localStorage.setItem('board',JSON.stringify(list));    
  };
  static putColumns = async (obj, id) => {
    let all = JSON.parse(localStorage.getItem('board'));
    const list = all && all.length > 0 ? all : [];
    for (const key in list[0].columns) {
      if (list[0].columns[key].id === id){
        list[0].columns[key].description = obj.description;
        break;
      }
    }
    localStorage.setItem('board',JSON.stringify(list));    
  };
  static deleteColumns = async (id) => {
    let all = JSON.parse(localStorage.getItem('board'));
    const list = all && all.length > 0 ? all : [];
    let newColumns = [];
    for (const key in list[0].columns) {
      if (list[0].columns[key].id !== id){
        newColumns.push(list[0].columns[key]);
      }
    }
    list[0].columns = newColumns;
    localStorage.setItem('board',JSON.stringify(list));    
  }
  static postCards = async (obj, column) => {
    let all = JSON.parse(localStorage.getItem('board'));
    const list = all && all.length > 0 ? all : [];
    for (const key in list[0].columns) {
      if (list[0].columns[key].id === column){
        list[0].columns[key].cards.push(obj);
        list[0].columns[key].cards[list[0].columns[key].cards.length-1].id = GenerateNumber();
        break;
      }
    }
    localStorage.setItem('board',JSON.stringify(list));    
  };
  static putCards = async (obj, column, id) => {
    let all = JSON.parse(localStorage.getItem('board'));
    const list = all && all.length > 0 ? all : [];
    for (const key in list[0].columns) {
      if (list[0].columns[key].id === column){
        for (const c in list[0].columns[key].cards) {
          if (list[0].columns[key].cards[c].id === id){
            list[0].columns[key].cards[c].description = obj.description;
            list[0].columns[key].cards[c].color = obj.color;
            break;
          }          
        }        
      }
    }
    localStorage.setItem('board',JSON.stringify(list));    
  };
  static deleteCards = async (column, id) => {
    let all = JSON.parse(localStorage.getItem('board'));
    const list = all && all.length > 0 ? all : [];
    for (const key in list[0].columns) {
      if (list[0].columns[key].id === column){
        let newCards = [];
        for (const c in list[0].columns[key].cards) {
          if (list[0].columns[key].cards[c].id !== id){
            newCards.push(list[0].columns[key].cards[c]);
          }          
        }  
        list[0].columns[key].cards = newCards;
      }
    }
    localStorage.setItem('board',JSON.stringify(list));    
  };
  static remake = async (payload) => {
    let all = JSON.parse(localStorage.getItem('board'));
    const list = all && all.length > 0 ? all : [];
    list[0].columns = payload.columns;          
    localStorage.setItem('board',JSON.stringify(list));    
  };
}
