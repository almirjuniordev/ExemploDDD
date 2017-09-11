using ProjetoExemploDDD.Identity;
using ProjetoExemploDDD.Infra.CrossCutting.Identity.Models;
using SimpleInjector;
using ProjetoExemploDDD.Infra.CrossCutting.Identity.Configuracao;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace ProjetoExemploDDD.Infra.CrossCutting.IoC
{
    public class InjecaoDeDependencia
    {
        public static void RegistrarDependencias(Container container)
        {
            #region Injeção de Dependencia Identity

            container.Register<ApplicationDbContext>(Lifestyle.Scoped);
            container.Register<IUserStore<ApplicationUser>>(() => new UserStore<ApplicationUser>(new ApplicationDbContext()), Lifestyle.Scoped);
            container.Register<ApplicationUserManager>(Lifestyle.Scoped);
            container.Register<ApplicationSignInManager>(Lifestyle.Scoped);
            #endregion
      




        }
}
}
