function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {

        let min = i;

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min != i) {

            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }
    return array;
}


let arrToSort = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
// console.log(arrToSort);

console.log(selectionSort(arrToSort));