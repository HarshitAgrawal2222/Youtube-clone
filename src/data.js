export const API_KEY='AIzaSyCMfCeX-lcOFdPlZfRsYSUp6mQ6xxH-58Q';

export const value_converter = (value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
        {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}