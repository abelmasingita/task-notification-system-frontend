import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';

import type { Notification } from '@/components/dashboard/notifications/interfaces';

const useWebSocket = (url: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new WebSocket(url),
      connectHeaders: {},
      debug: (str) => {
        console.log('WebSocket Debug: ', str);
      },
      onConnect: () => {
        console.log('Connected to WebSocket');
        setConnected(true);
        client.subscribe('/topic/notifications', (message) => {
          console.log('Message received:', message.body);
        });
      },
      onDisconnect: () => {
        console.log('Disconnected from WebSocket');
        setConnected(false);
      },
      onWebSocketError: (error) => {
        console.error('WebSocket Error: ', error);
      },
      onStompError: (frame) => {
        console.error('STOMP Error: ', frame);
      },
    });

    // Activate WebSocket client
    client.activate();

    // Cleanup on unmount
    return () => {
      void client.deactivate();
    };
  }, [url]);

  return { notifications, connected };
};

export default useWebSocket;
