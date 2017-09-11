using Microsoft.AspNet.Identity.EntityFramework;
using ProjetoExemploDDD.Infra.CrossCutting.Identity.Models;

namespace ProjetoExemploDDD.Identity
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}
