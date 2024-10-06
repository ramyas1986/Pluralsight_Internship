using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

public class FakeDbSet<T> : IQueryable<T>, IAsyncEnumerable<T> where T : class
{
    private readonly List<T> _data;
    private readonly IQueryable _query;

    public FakeDbSet(IEnumerable<T> data)
    {
        _data = data.ToList();
        _query = _data.AsQueryable();
    }

    public Task<T?> FindAsync(params object[] keyValues)
    {
        // Replace this with actual key-based search logic if needed
        return Task.FromResult(_data.FirstOrDefault());
    }

    public IQueryProvider Provider => _query.Provider;
    public Expression Expression => _query.Expression;
    public Type ElementType => _query.ElementType;
    public IEnumerator<T> GetEnumerator() => _data.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator() => _data.GetEnumerator();
    public IAsyncEnumerator<T> GetAsyncEnumerator(CancellationToken cancellationToken = default) => new FakeAsyncEnumerator<T>(_data.GetEnumerator());
}

public class FakeAsyncEnumerator<T> : IAsyncEnumerator<T>
{
    private readonly IEnumerator<T> _enumerator;

    public FakeAsyncEnumerator(IEnumerator<T> enumerator)
    {
        _enumerator = enumerator ?? throw new ArgumentNullException(nameof(enumerator));
    }

    public ValueTask DisposeAsync()
    {
        _enumerator.Dispose();
        return ValueTask.CompletedTask;
    }

    public ValueTask<bool> MoveNextAsync()
    {
        return new ValueTask<bool>(_enumerator.MoveNext());
    }

    public T Current => _enumerator.Current;
}
