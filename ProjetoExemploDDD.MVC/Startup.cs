using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ProjetoExemploDDD.MVC.Startup))]
namespace ProjetoExemploDDD.MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
