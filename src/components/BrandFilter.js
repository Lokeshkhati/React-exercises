// - Your challenge is to build a brand filter for products.
// - The parameters for the brand filter, i.e, brand names should appear when you search for the brand name in an input box

import { useState } from 'react'
const BrandFilter = () => {


    const brandData = ["puma", "adiddas", "wildcraft", "levis", "celio"];
    // Do the same thing with this Data Structure

    const brandData1 = [
        { id: "0a", brandName: "puma" },
        { id: "0b", brandName: "adiddas" },
        { id: "0c", brandName: "wildcraft" },
        { id: "0d", brandName: "levis" },
        { id: "0e", brandName: "celio" }
    ];

    // Do the same thing with this Data Structure
    const brandData2 = {
        customerRating: [
            { brandId: "0a", rating: "4.5" },
            { brandId: "0b", rating: "4" },
            { brandId: "0c", rating: "3.8" },
            { brandId: "0d", rating: "4.5" },
            { brandId: "0e", rating: "3.9" }
        ],
        brandNames: [
            { id: "0a", brandName: "puma" },
            { id: "0b", brandName: "adiddas" },
            { id: "0c", brandName: "wildcraft" },
            { id: "0d", brandName: "levis" },
            { id: "0e", brandName: "celio" }
        ]
    };


    const [brands, setBrands] = useState(brandData2.brandNames)
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        const inputValue = event.target.value
        setValue(inputValue)

        const data = brands.filter((brand) => brand.brandName.includes(inputValue))
        setBrands(data)
    }
    return (
        <div>
            <input type='text' autoFocus value={value} onChange={handleChange} />
            <ul>
                {
                    brands.map((brand) => <li key={brand.id}>{brand.brandName} </li>)

                }
            </ul>
        </div>
    )
}
export default BrandFilter