using System;
using System.Collections.Generic;

namespace ProjetoExemploDDD.Infra.CrossCutting.Identity.Models
{
    public class SendCodeViewModel
    {
        public string SelectedProvider { get; set; }
        public ICollection<Tuple<string, string>> Providers { get; set; }
        public string ReturnUrl { get; set; }
        public bool RememberMe { get; set; }
    }
}
