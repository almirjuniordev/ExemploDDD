using System.Web;
using System.Web.Optimization;

namespace ProjetoExemploDDD.MVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            #region JavaScript


            bundles.Add(new ScriptBundle("~/bundles/js/jQuery", @"https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js").Include(
                        "~/bower_components/jquery/dist/jquery.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/angular", @"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js").Include(
                        "~/bower_components/angular/angular.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/knockout", @"https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js").Include(
                        "~/bower_components/knockout/dist/knockout.js"));


            bundles.Add(new ScriptBundle("~/bundles/js/layout").Include(
                        "~/Scripts/layout.js"));



            bundles.Add(new ScriptBundle("~/bundles/js/bootstrap", @"https://ajax.aspnetcdn.com/ajax/bootstrap/3.3.7/bootstrap.min.js").Include(
            "~/bower_components/bootstrap/dist/js/bootstrap.min.js"));


            bundles.Add(new ScriptBundle("~/bundles/js/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));



            bundles.Add(new ScriptBundle("~/bundles/js/fastclick").Include(
                "~/bower_components/jquery-slimscroll/jquery.slimscroll.min.js",
                "~/bower_components/fastclick/lib/fastclick.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/default").Include(
                        "~/Scripts/app.js",
                        "~/Scripts/scripts.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/icheck").Include(
            "~/bower_components/iCheck/icheck.min.js",
            "~/Scripts/components.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/consulta").Include(
                        "~/Scripts/consulta.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/sweetalert").Include(
                        "~/bower_components/sweetalert2/dist/sweetalert2.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/js/chatbot").Include(
            "~/Scripts/chatbot/dialogflow/ApiAi.min.js",
            "~/Scripts/chatbot/chatbot.js"));



            #endregion






            #region CSS
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/bundles/css/bootstrap", @"https://ajax.aspnetcdn.com/ajax/bootstrap/3.3.7/css/bootstrap.min.css").Include(
            "~/bower_components/bootstrap/dist/css/bootstrap.min.css"));


            #region Estilos Padrões
            bundles.Add(new StyleBundle("~/bundles/css/default").Include(
                        "~/Content/css/site.css",
                        "~/Content/css/skins/_all-skins.min.css",
                        "~/bower_components/sweetalert2/dist/sweetalert2.min.css"));
            #endregion
            #endregion
        }
    }
}
