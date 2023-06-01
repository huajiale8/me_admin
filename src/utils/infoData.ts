


export const infoData = (data:any) =>{
    const date = new Date(data);
    const y = date.getFullYear();
    let MM = date.getMonth() + 1 as number;
    MM = MM < 10 ? ('0'+MM) as unknown as number : MM;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) as unknown as number : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) as unknown as number : h;
    let m = date.getMinutes();
    m = m < 10 ? ('0' + m) as unknown as number : m;
    let s = date.getSeconds();
    s = s < 10 ? ('0' + s) as unknown as number : s;
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
}
