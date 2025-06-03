import { Player } from './models/Player.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

players = [
  new Player('guy', 'https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
  new Player('fern', 'https://emojipedia.org/_next/image?url=https%3A%2F%2Fis.zobj.net%2Fimage-server%2Fv1%2Fimages%3Fr%3D3a4w-XJxYHHEb6fy-AXqIjVngt-KAzA_UeVtlGlSPe-5UikS_b0VWxK0RZEkw71ozKGp9V6sFU-5h9jU45roVNwgrBlvOBcNQrX77nqeLnVpzeioG7o-0x2a40SCWT4OBbdcwmpi7JvQ_a1u9dCa-J_KRZ_4UflFa_bhEYvetHgqTFJp_tGAlgQrb7TJT4cbs1-mxCznm77E_osePkYP8G9WORds7vktz6c8pjlt0odjAQl8EO-jST2ozUk&w=256&q=75'),
  new Player('riss', 'https://images.unsplash.com/photo-1748164521179-ae3b61c6dd90?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
];

}

export const AppState = createObservableProxy(new ObservableAppState())