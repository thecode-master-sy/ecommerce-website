
export function isOverlaping(firstElement: ElementBounds | null, secondElement: ElementBounds | null) {
   
    if(firstElement && secondElement) {
       const overlap = !(firstElement.right < secondElement.left ||  
        firstElement.left > secondElement.right ||  
        firstElement.bottom < secondElement.top ||  
        firstElement.top > secondElement.bottom); 

        return overlap
    }else {
        return false;
    }
   
}