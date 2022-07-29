function solve(num,range)
{
    var ans=0;
    while(num>0)
    {
        var rem=num%10
        rem=Math.floor(rem)
        ans+=rem*range;
        range=range/10;
        num=num/10
    }
    return ans  //return ans
}

var num=149
var cnt=0
var temp=num
while(temp!=0)
{
    temp=Math.floor(temp/10); //find the length of number
    cnt++
}
var tem=Math.pow(10,cnt-1) //after length find number of zero acc to length
console.log(solve(num,tem)) //function call