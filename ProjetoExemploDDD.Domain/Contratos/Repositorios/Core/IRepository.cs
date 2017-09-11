using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProjetoExemploDDD.Domain.Contratos.Repositorios.Core
{
    /// <summary>
    /// Interface que representa um repositorio generico
    /// </summary>
    /// <typeparam name="T">Retorna uma classe </typeparam>
    public interface IRepository<T> : IDisposable where T : class
    {
        void Inserir(T objeto);
        Task InserirAsync(T objeto);
        T BuscarPorID(long id);
        Task<T> BuscarPorIDAsync(long id);
        IEnumerable<T> BuscarTodos();
        Task<IEnumerable<T>> BuscarTodosAsync();
        void Atualizar(T objeto);
        Task AtualizarAsync(T objeto);
        void Deletar(T objeto);
        Task DeletarAsync(T objeto);
    }
}
