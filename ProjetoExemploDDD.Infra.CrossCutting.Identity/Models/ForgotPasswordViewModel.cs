using System.ComponentModel.DataAnnotations;

namespace ProjetoExemploDDD.Infra.CrossCutting.Identity.Models
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }
}
