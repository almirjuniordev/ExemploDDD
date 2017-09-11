using ProjetoExemploDDD.Domain.Contratos.Repositorios.Core;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoExemploDDD.Repositorios.Core
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DbContext contexto;

        public Repository(DbContext contexto) =>
            this.contexto = contexto;


        public void Atualizar(T objeto)
        {
            contexto.Entry(objeto).State = EntityState.Modified;
            contexto.SaveChanges();
        }

        public async Task AtualizarAsync(T objeto)
        {
            contexto.Entry(objeto).State = EntityState.Modified;
            await contexto.SaveChangesAsync();
        }

        public void Deletar(T objeto)
        {
            contexto.Entry(objeto).State = EntityState.Deleted;
            contexto.SaveChanges();
        }

        public async Task DeletarAsync(T objeto)
        {
            contexto.Entry(objeto).State = EntityState.Deleted;
            await contexto.SaveChangesAsync();
        }

        public void Inserir(T objeto)
        {
            contexto.Entry(objeto).State = EntityState.Added;
            contexto.SaveChanges();
        }

        public async Task InserirAsync(T objeto)
        {
            contexto.Entry(objeto).State = EntityState.Modified;
            await contexto.SaveChangesAsync();
        }

        public T BuscarPorID(long id) =>
            contexto.Set<T>().Find(id);

        public async Task<T> BuscarPorIDAsync(long id) =>
            await contexto.Set<T>().FindAsync(id);

        public IEnumerable<T> BuscarTodos() =>
            contexto.Set<T>().ToList();

        public async Task<IEnumerable<T>> BuscarTodosAsync() =>
            await contexto.Set<T>().ToListAsync();


        public void Dispose()
        {
            contexto.Dispose();
        }
    }
}
