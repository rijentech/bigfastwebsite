
export const linkTrimer = (i) =>{
    const reset = i?.toLowerCase().split(" ").join().replace(/[^a-z0-9 -]/gi, "")
    return reset
}