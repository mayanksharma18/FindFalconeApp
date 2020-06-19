
export const returnNewArray = (arr,value,targetid,state) => {
    let newArr = [];
    newArr = arr.map(elem => {
        if (elem.name === state[targetid]) {
          elem.total_no = elem.total_no + 1;
        }
        if (elem.name === value && elem.total_no !== 0) {
          elem.total_no = elem.total_no - 1;
        }
        return elem;
      });
      return newArr;
}

export const returnDecreasedNewArray = (arr,value,targetid) => {
    let newArr = [];
    newArr = arr.map(elem => {
        if (elem.name === value && elem.total_no !== 0) {
          elem.total_no = elem.total_no - 1;
        }
        return elem;
      });
      return newArr;
}

export const filterVehicles =(vehiclesArray,vehicle) => {
  let newArr = [];
  for(let i =0; i< vehicle.length;i++){
    if(newArr.length>1){
      newArr = newArr.filter((j) => j.name !== vehicle[i]);
    } else {
      newArr = vehiclesArray.filter((j) => j.name !== vehicle[i]);
    }
  }
  return newArr
}