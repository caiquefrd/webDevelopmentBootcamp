

for (var bottlesNumber = 100; bottlesNumber >= 0; bottlesNumber -- ){
    
    if (bottlesNumber === 0 ) {
        console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall')
    }
    else if (bottlesNumber === 1) {
        console.log(bottlesNumber + ' bottle of beer on the wall, ' + bottlesNumber + ' bottle of beer. Take one down and pass it around, '
    + 'No more bottles of beer on the wall.' );
    }
    else {
        console.log(bottlesNumber + ' bottles of beer on the wall, ' + bottlesNumber + ' bottles of beer. Take one down and pass it around, '
    + ( bottlesNumber - 1 ) + ' bottles of beer on the wall.' );
    }

    
}