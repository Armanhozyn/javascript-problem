// Feet to Mile

    function feetToMile(feet){
        if(feet == 0)
            return "Please enter a valid feet value!!";    
        if(feet < 0)
            return "Sorry Negetive number are not allowed!!"
        mile = feet * 0.000189394 + " Mile";
        return mile;
    }
    
    var calculateMile = feetToMile(2);

   // console.log(calculateMile);



// Wood Calculator

    function woodCalculator(chair,table,bed){
        chair = parseInt(chair);
        table = parseInt(table);
        bed = parseInt(bed);

        if(chair < 0 || table < 0 || bed < 0 ){
            return "Negetive values are not allowed!!";
        }else{
        totalChairWood = chair * 1;
        totalTableWood = table * 3;
        totalBedWood = bed * 5;

        totalWood = totalChairWood + totalTableWood + totalBedWood;

        return `
        Chairs need = ${totalChairWood} qb wood,
        Table need = ${totalTableWood} qb wood,
        Bed need = ${totalBedWood} qb wood,

        Total ${totalWood} qb woods are required`;
        }

    }

    var calculateWood = woodCalculator(3,3,3);


    //console.log(calculateWood);


// Brick Calculator

    // 1 feet = 1000 brick

    // 1st ten floor = 15 feet
    // 11 -20 floors = 12 feet
    // 20 high are = 10

    function brickCalculator(floor){
        floor = parseInt(floor);

        if(floor <= 0 )
            return "Negetive or zero Value is not allowed";
        if(floor <= 10){
           var bricks = (floor * 15) * 1000;
            return bricks; 
        }else if( floor <= 20 ){
            var firstTenBrick = (10 * 15) * 1000;
            var leftBrick = floor - 10;
            var bricks = (leftBrick * 12) * 1000;
            var TotalBrick = firstTenBrick + bricks;
            return TotalBrick; 
        }else{
            var firstTenBrick = (10 * 15) * 1000;
            var nextTenBrick = (10 * 12) * 1000;
            var leftBrick = floor - 20;
            var Bricks = (leftBrick * 10) * 1000;
            var TotalBrick = firstTenBrick + nextTenBrick + Bricks;
            return TotalBrick;
        }
    }

    var calculateBrick = brickCalculator(40);

    //console.log(calculateBrick);


    // Tiny Friend 

        function tinyFriend(friends){
            var min = friends[0];
            for(i=0;i <= friends.length ; i++){
                var element = friends[i];
                if(element.length < min.length){
                    min = element;
                }
              
            }
            return min;
        }

        var friends = ['rafi','kazif','ra'];

        console.log(tinyFriend(friends));