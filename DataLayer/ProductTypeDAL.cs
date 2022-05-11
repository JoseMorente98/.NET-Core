using EntityLayer;
using System.Collections.Generic;

namespace DataLayer
{
    public class ProductTypeDAL
    {
        public List<ProductTypeCLS> listProductType()
        {
            List<ProductTypeCLS> list = new List<ProductTypeCLS>();
            list.Add(new ProductTypeCLS
            {
                IdProductType = 1,
                Name = "Fruits",
                Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            });
            list.Add(new ProductTypeCLS
            {
                IdProductType = 2,
                Name = "Vegetables",
                Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            });
            list.Add(new ProductTypeCLS
            {
                IdProductType = 3,
                Name = "Sea Food",
                Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            });

            return list;
        }
    }
}
