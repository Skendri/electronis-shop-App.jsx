import React, { useMemo, useState } from 'react';

function Inbox({ messages, onToggleRead }) {
  const [filter, setFilter] = useState('all');
  const filtered = useMemo(() => {
    if (filter === 'unread') return messages.filter(m => !m.read);
    if (filter === 'read') return messages.filter(m => m.read);
    return messages;
  }, [messages, filter]);

  return (
    <div className='inbox'>
      <div className='inbox-toolbar'>
        <div className='filters'>
          <button className={`chip ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`chip ${filter === 'unread' ? 'active' : ''}`} onClick={() => setFilter('unread')}>Unread</button>
          <button className={`chip ${filter === 'read' ? 'active' : ''}`} onClick={() => setFilter('read')}>Read</button>
        </div>
      </div>
      <ul className='inbox-list'>
        {filtered.map((m) => (
          <li key={m.id} className={`inbox-item ${m.read ? 'read' : 'unread'}`} data-contextable>
            <div className='inbox-item-main'>
              <strong>{m.title}</strong>
              <span className='muted'>{m.preview}</span>
            </div>
            <div className='inbox-item-actions'>
              <button className='btnIndex tertiary' onClick={() => onToggleRead?.(m.id)}>{m.read ? 'Mark unread' : 'Mark read'}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inbox;


