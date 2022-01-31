let unsortedArray=[8,2,4,6,7,8,2,4,6,9];
let swapped;
function bubblesort(arr){
    swapped=false;
    for(let i=0,j=1;i<unsortedArray.length;i++,j++){
        if(arr[i]>arr[j]){
            swapped=true;
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
}
do{
    bubblesort(unsortedArray);
}while(swapped);
console.log(unsortedArray);
