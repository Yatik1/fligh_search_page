export function dateFormatter(date:string){
    return new Date(date).toLocaleString('en-US', { month: 'short', day: 'numeric' });
}