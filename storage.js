/* ============================================================
   CorretorFácil — camada de dados (localStorage)
   Este MVP usa o localStorage do navegador como banco de dados
   local, apenas para fins de demonstração e testes do protótipo.
   Não requer backend/servidor para ser executado.
   ============================================================ */

const DB = {
  KEYS: {
    corretor: "cf_corretor",
    imoveis: "cf_imoveis",
    visitas: "cf_visitas",
    fichas: "cf_fichas",
  },

  _get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      console.error("Erro ao ler storage:", key, e);
      return fallback;
    }
  },
  _set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  _uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  },

  // ---------- Corretor (usuário logado, simulação de sessão) ----------
  getCorretor() { return this._get(this.KEYS.corretor, null); },
  setCorretor(nome) { this._set(this.KEYS.corretor, { nome, entrouEm: new Date().toISOString() }); },
  logout() { localStorage.removeItem(this.KEYS.corretor); },

  // ---------- Imóveis ----------
  listImoveis() { return this._get(this.KEYS.imoveis, []); },
  addImovel(imovel) {
    const lista = this.listImoveis();
    imovel.id = this._uid();
    imovel.criadoEm = new Date().toISOString();
    lista.push(imovel);
    this._set(this.KEYS.imoveis, lista);
    return imovel;
  },
  removeImovel(id) {
    this._set(this.KEYS.imoveis, this.listImoveis().filter(i => i.id !== id));
  },
  getImovel(id) {
    return this.listImoveis().find(i => i.id === id);
  },

  // ---------- Visitas (agenda) ----------
  listVisitas() {
    return this._get(this.KEYS.visitas, []).sort((a, b) =>
      (a.data + a.hora).localeCompare(b.data + b.hora)
    );
  },
  addVisita(visita) {
    const lista = this._get(this.KEYS.visitas, []);
    visita.id = this._uid();
    lista.push(visita);
    this._set(this.KEYS.visitas, lista);
    return visita;
  },
  removeVisita(id) {
    this._set(this.KEYS.visitas, this._get(this.KEYS.visitas, []).filter(v => v.id !== id));
  },
  getVisita(id) {
    return this._get(this.KEYS.visitas, []).find(v => v.id === id);
  },

  // ---------- Fichas de visita ----------
  listFichas() { return this._get(this.KEYS.fichas, []); },
  addFicha(ficha) {
    const lista = this.listFichas();
    ficha.id = this._uid();
    ficha.criadoEm = new Date().toISOString();
    lista.push(ficha);
    this._set(this.KEYS.fichas, lista);
    return ficha;
  },
  fichaByVisita(visitaId) {
    return this.listFichas().find(f => f.visitaId === visitaId);
  },

  // ---------- Seed: dados de exemplo para facilitar a demonstração ----------
  seedIfEmpty() {
    if (this.listImoveis().length > 0) return;

    const imoveis = [
      { titulo: "Apartamento 2 quartos - Centro", regiao: "Centro", tipo: "Apartamento", valor: 280000, endereco: "Rua Hercílio Luz, 210", descricao: "Próximo ao comércio, 2 quartos, 1 vaga de garagem." },
      { titulo: "Casa térrea - Cordeiros", regiao: "Cordeiros", tipo: "Casa", valor: 410000, endereco: "Rua das Palmeiras, 88", descricao: "3 quartos, quintal amplo, aceita financiamento." },
      { titulo: "Kitnet mobiliada - Fazenda", regiao: "Fazenda", tipo: "Kitnet", valor: 900, endereco: "Av. Marcos Konder, 1500", descricao: "Para locação, mobiliada, próxima à praia." },
    ].map(i => this.addImovel(i));

    const hoje = new Date();
    const iso = (d) => d.toISOString().slice(0, 10);

    this.addVisita({ imovelId: imoveis[0].id, cliente: "Marcos Silveira", telefone: "(47) 99900-1111", data: iso(hoje), hora: "09:00", status: "agendada" });
    this.addVisita({ imovelId: imoveis[1].id, cliente: "Fernanda Costa", telefone: "(47) 99900-2222", data: iso(hoje), hora: "11:00", status: "agendada" });
    this.addVisita({ imovelId: imoveis[2].id, cliente: "Rodrigo Andrade", telefone: "(47) 99900-3333", data: iso(hoje), hora: "15:30", status: "agendada" });
  },
};
