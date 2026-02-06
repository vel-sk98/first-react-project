
export const Productloader = async () => {
    const productUrl = "https://dummyjson.com/products"
    const response = await fetch(productUrl);
    const result = await response.json();
    console.log(result);

    return result;
}
