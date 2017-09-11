using System;
using System.Collections.Generic;

namespace ProjetoExemploDDD.Infra.CrossCutting.Identity.Models
{
    public class ConfigureTwoFactorViewModel
    {
        public string SelectedProvider { get; set; }
        public ICollection<Tuple<string, string>> Providers { get; set; }
    }
}
