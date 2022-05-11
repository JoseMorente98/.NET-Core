using DataLayer;
using EntityLayer;
using System.Collections.Generic;

namespace BusinessLayer
{
    public class ProductTypeBL
    {
        public List<ProductTypeCLS> listProductType()
        {
            ProductTypeDAL productTypeDAL = new ProductTypeDAL();
            return productTypeDAL.listProductType();
        }
    }
}
