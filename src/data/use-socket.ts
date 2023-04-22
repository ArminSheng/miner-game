import { useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";
import { TickData } from "./types";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { ApiEndpoint } from "../common";

let socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined = undefined;

function initSocket(queryClient: QueryClient) {
  if (typeof socket === "undefined") {
    socket = io(ApiEndpoint, {
      path: "",
      autoConnect: false,
    });

    socket!.on("tick", (data: TickData) => {
      queryClient.setQueriesData("tick", () => data);
    });

    socket!.on("connect", () => {
      console.log("connected");
    });
  }
  return socket;
}

const initialData: TickData = {
  asteroids: [],
  planets: [],
  miners: [],
  currentTick: 0,
};

export function useSocket() {
  const client = useQueryClient();
  const { current: socket } = useRef(initSocket(client));

  const { data } = useQuery<TickData>("tick", {
    initialData: initialData,
  });

  useEffect(() => {
    if (!socket.connected) socket.connect();

    return () => {};
  }, [socket]);

  return [data || initialData];
}
