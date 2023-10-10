const args = process.argv.slice(2)
const str = args[0]
const nums = args.slice(1)

const calculate = ( str, nums ) => {
    let result = 0;

    if(!checkIfNaN(nums)) process.exit(0)

    if (str === 'sum') {
        for (const num of nums) {
            result += Number(num)
        }
    } else if (str === 'avg') {
        for (const num of nums) {
            result += Number(num)
        }
        result /= nums.length
    }else if(str === 'med') {
        nums.sort( (a,b) => a - b )
        const index = (nums.length-1) / 2
        result = index%2===0? nums[index] : ( Number(nums[Math.floor(index)]) + Number(nums[Math.floor(index)+1]) ) / 2
    }else{
        console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)')
        process.exit(0)
    }

    console.log(result)
}

const checkIfNaN = (nums) => {
    for (const num of nums) {
        if( isNaN( Number(num) ) ){
            console.log(`Sorry, the argument '${num}' is not a number, please try again`)
            return false
        }
    }
    return true
}

calculate(str,nums)

