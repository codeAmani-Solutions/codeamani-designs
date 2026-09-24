const {BrandLockup,SidebarNav,NavItem,StatusCard,GlassCard,HeroHeader,SectionHeader,Button,FilterPill,PillGroup,
  SegmentedPills,SearchInput,Badge,Tag,StatusPill,StatusDot,LedgerGroup,LedgerTable,LedgerRow,LedgerCell,RowActions,MetaSummary}=window.CodeAmaniGlassDarkDesignSystem_0b91e7;

const NAV=[{icon:'🛡',label:'Overview'},{icon:'🔑',label:'Secrets',count:502},{icon:'📦',label:'Projects',count:62},
{icon:'🕸',label:'Graphs'},{icon:'📐',label:'Schema'},{icon:'🩺',label:'Audit'},{icon:'⚙️',label:'Settings'}];

const SECRETS=[
{ns:'kumba-gallery',name:'kumba-gallery/BETTER_AUTH_SECRET',type:'Env',scope:'runtime',rotated:'2026-09-06',status:'No policy',tone:'neutral'},
{ns:'kumba-gallery',name:'kumba-gallery/RESEND_API_KEY',type:'ApiKey',scope:'runtime',rotated:'2026-09-04',status:'Rotation ok',tone:'ok'},
{ns:'kumba-gallery',name:'kumba-gallery/DATABASE_URL',type:'Url',scope:'server',rotated:'2026-02-11',status:'Overdue 214d',tone:'warn'},
{ns:'kumba-gallery',name:'kumba-gallery/S3_UPLOAD_TOKEN',type:'ApiKey',scope:'build',rotated:'2026-08-19',status:'Rotation ok',tone:'ok'},
{ns:'vertiq-market',name:'vertiq-market/STRIPE_LIVE_KEY',type:'ApiKey',scope:'server',rotated:'2026-08-28',status:'Rotation ok',tone:'ok'},
{ns:'vertiq-market',name:'vertiq-market/WEBHOOK_SIGNING',type:'Env',scope:'server',rotated:'2026-07-19',status:'No policy',tone:'neutral'},
{ns:'vertiq-market',name:'vertiq-market/POSTGRES_PRIMARY',type:'Url',scope:'server',rotated:'2026-06-30',status:'Overdue 69d',tone:'warn'},
{ns:'vertiq-market',name:'vertiq-market/SELAR_PAYOUT_KEY',type:'ApiKey',scope:'runtime',rotated:'2026-09-02',status:'Rotation ok',tone:'ok'},
{ns:'hazina-core',name:'hazina-core/MASTER_SEAL',type:'Seal',scope:'local',rotated:'2026-09-01',status:'Sealed',tone:'ok'},
{ns:'hazina-core',name:'hazina-core/AUDIT_SIGNING_KEY',type:'Seal',scope:'local',rotated:'2026-08-25',status:'Sealed',tone:'ok'},
{ns:'hazina-core',name:'hazina-core/DEVICE_BINDING',type:'Env',scope:'local',rotated:'2026-05-14',status:'No policy',tone:'neutral'},
{ns:'codeamani-labs',name:'codeamani-labs/GUMROAD_TOKEN',type:'ApiKey',scope:'build',rotated:'2026-08-31',status:'Rotation ok',tone:'ok'},
{ns:'codeamani-labs',name:'codeamani-labs/SMTP_RELAY_URL',type:'Url',scope:'runtime',rotated:'2026-04-02',status:'Overdue 158d',tone:'warn'},
{ns:'codeamani-labs',name:'codeamani-labs/ANALYTICS_WRITE',type:'ApiKey',scope:'runtime',rotated:'2026-09-05',status:'Rotation ok',tone:'ok'}];

const FILTERS=['All','ApiKey','Env','Url','Seal','Overdue'];
const TYPE_TONE={ApiKey:'magenta',Env:'neutral',Url:'neutral',Seal:'yellow'};
const COLS=[{label:'Name'},{label:'Type',width:'96px'},{label:'Scope',width:'96px'},
  {label:'Last rotated',width:'124px'},{label:'Status',width:'168px'},{label:'',align:'right',width:'188px'}];

function TitleBar(){
  return (
    <div style={{display:'flex',alignItems:'center',gap:'10px',height:'26px',padding:'0 10px',background:'#04060C',
      borderBottom:'1px solid var(--border-hairline)',flex:'0 0 26px'}}>
      <span aria-hidden="true" style={{fontSize:'11px'}}>🛡️</span>
      <span style={{font:'var(--type-meta)',fontSize:'var(--fs-micro)',color:'var(--text-secondary)'}}>Hazina Security Vault</span>
      <div style={{flex:1}}></div>
      {['⧉','⋮','–','▢','✕'].map((g,i)=>(<span key={i} style={{font:'var(--type-meta)',fontSize:'var(--fs-micro)',color:'var(--text-muted)',padding:'0 5px'}}>{g}</span>))}
    </div>
  );
}

function Sidebar({active,onNavigate}){
  return (
    <aside style={{width:'var(--sidebar-w)',flex:'0 0 var(--sidebar-w)',display:'flex',flexDirection:'column',gap:'var(--sp-10)',
      padding:'var(--sp-10) var(--sp-6)',background:'var(--bg-sidebar)',borderRight:'1px solid var(--border-hairline)',
      backdropFilter:'blur(var(--blur-sidebar))'}}>
      <BrandLockup meta={<span>AES-256 · Local ·<br/>Zero-exposure</span>} />
      <div style={{height:'1px',background:'var(--border-hairline)'}}></div>
      <SidebarNav>
        {NAV.map(n=>(<NavItem key={n.label} icon={n.icon} label={n.label} count={n.count} active={active===n.label} onClick={()=>onNavigate(n.label)} />))}
      </SidebarNav>
      <div style={{flex:1}}></div>
      <StatusCard icon="🔒" label="127.0.0.1 · sealed loopback" />
      <div style={{font:'var(--type-meta)',fontSize:'var(--fs-micro)',color:'var(--text-muted)',lineHeight:1.7}}>
        Hazina v0.3.0<br/>Liquid glass · security console<br/>Built by codeAmani Labs
      </div>
    </aside>
  );
}

function StatusStrip(){
  const items=['Rotation 3 overdue','Refs ok','Paths only','Reveal audited'];
  return (
    <GlassCard pad="0" style={{display:'flex',alignItems:'center',gap:'var(--sp-6)',padding:'4px var(--sp-6) 4px 4px',overflow:'hidden'}}>
      <StatusPill icon="🛡" style={{borderRadius:'var(--r-pill)'}}>Live</StatusPill>
      {items.map(t=>(<span key={t} style={{font:'var(--type-label)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--text-secondary)'}}>· {t}</span>))}
      <div style={{flex:1}}></div>
      <span style={{font:'var(--type-label)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--text-muted)'}}>Synced 14:22:07</span>
    </GlassCard>
  );
}

function RevealRow({secret}){
  return (
    <LedgerRow>
      <LedgerCell colSpan={6} style={{height:'auto',padding:'var(--sp-6) var(--row-pad-x)',background:'var(--magenta-tint-04)'}}>
        <div style={{font:'var(--type-label)',letterSpacing:'var(--ls-label)',color:'var(--text-label)',marginBottom:'var(--sp-4)'}}>{'// revealed · '+secret.name+' · this access was written to the audit log'}</div>
        <code style={{fontFamily:'var(--font-mono)',fontSize:'var(--fs-body)',color:'var(--accent-highlight)'}}>hzn_sk_9f42d1c0b7ae4488a1f0e6c3d59b7a21</code>
      </LedgerCell>
    </LedgerRow>
  );
}

function SecretsView(){
  const [filter,setFilter]=React.useState('All');
  const [view,setView]=React.useState('ns');
  const [q,setQ]=React.useState('');
  const [revealed,setRevealed]=React.useState('vertiq-market/STRIPE_LIVE_KEY');
  const rows=SECRETS.filter(s=>{
    const okF=filter==='All'||s.type===filter||(filter==='Overdue'&&s.tone==='warn');
    return okF&&(q===''||s.name.toLowerCase().includes(q.toLowerCase()));
  });
  const groups=view==='ns'
    ?[...new Set(rows.map(r=>r.ns))].map(ns=>({ns,items:rows.filter(r=>r.ns===ns)}))
    :[{ns:'all works · flat',items:rows}];
  const overdue=rows.filter(r=>r.tone==='warn').length;

  return (<>
    <HeroHeader eyebrow="01, The collection" title="Secrets"
      deck="Every work is a path. Field names only — reveal is a deliberate, audited action."
      action={<div style={{display:'flex',gap:'var(--sp-6)',alignItems:'center'}}>
        <Button size="lg" icon="🔄">Rotate due</Button>
        <Button variant="primary" size="lg">+ New work</Button>
      </div>} />
    <StatusStrip/>
    <MetaSummary items={[
      {label:'Showing',value:rows.length+' / 502',tone:'magenta'},
      {label:'Stale in view',value:overdue,tone:'yellow'},
      {label:'Namespaces',value:groups.length},
      {label:'Press / to search'}]} />
    <SectionHeader index="01.1" title="Filter the collection" icon="🔍" />
    <GlassCard>
      <p style={{margin:'0 0 var(--sp-8)',font:'var(--type-body)',color:'var(--text-secondary)'}}>
        Search paths, types, tags, or field names. Press <strong style={{color:'var(--text-heading)'}}>/</strong> to focus search.
      </p>
      <div style={{display:'flex',gap:'var(--sp-10)',alignItems:'center',flexWrap:'wrap'}}>
        <SearchInput value={q} onChange={e=>setQ(e.target.value)} hint="/" style={{flex:'1 1 320px'}} />
        <PillGroup>
          {FILTERS.map(p=>(<FilterPill key={p} selected={filter===p} onClick={()=>setFilter(p)}>{p}</FilterPill>))}
          <SegmentedPills value={view} onChange={setView} options={[{value:'ns',label:'By namespace'},{value:'flat',label:'Flat list'}]} />
        </PillGroup>
      </div>
    </GlassCard>
    <SectionHeader index="01.2" title="Secrets ledger" icon="🔑" meta={rows.length+' of 502'} />
    {groups.map(g=>(
      <LedgerGroup key={g.ns} name={g.ns} count={g.items.length}>
        <LedgerTable columns={COLS}>
          {g.items.map(s=>(<React.Fragment key={s.name}>
            <LedgerRow>
              <LedgerCell strong>{s.name}</LedgerCell>
              <LedgerCell><Tag tone={TYPE_TONE[s.type]}>{s.type}</Tag></LedgerCell>
              <LedgerCell muted>{s.scope}</LedgerCell>
              <LedgerCell muted>{s.rotated}</LedgerCell>
              <LedgerCell><StatusDot tone={s.tone}>{s.status}</StatusDot></LedgerCell>
              <LedgerCell align="right">
                <RowActions>
                  <Button size="sm" icon="👁" onClick={()=>setRevealed(revealed===s.name?null:s.name)}>{revealed===s.name?'Hide':'Reveal'}</Button>
                  <Button size="sm" icon="🔄" aria-label="Rotate"></Button>
                  <Button size="sm" icon="✏️" aria-label="Edit"></Button>
                  <Button size="sm" variant="danger" icon="🗑" aria-label="Delete"></Button>
                </RowActions>
              </LedgerCell>
            </LedgerRow>
            {revealed===s.name?<RevealRow secret={s}/>:null}
          </React.Fragment>))}
        </LedgerTable>
      </LedgerGroup>
    ))}
    {rows.length===0?<GlassCard><span style={{font:'var(--type-body)',color:'var(--text-muted)'}}>No paths match this filter.</span></GlassCard>:null}
    <div style={{display:'flex',alignItems:'center',gap:'var(--sp-6)',padding:'0 0 var(--sp-10)'}}>
      <Badge>{rows.length}</Badge>
      <span style={{font:'var(--type-label)',letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:'var(--text-muted)'}}>works listed · 488 more behind this filter · audit retains every reveal</span>
    </div>
  </>);
}

function Console(){
  const [active,setActive]=React.useState('Secrets');
  React.useEffect(()=>{
    const h=e=>{if(e.key==='/'){const i=document.querySelector('input');if(i){e.preventDefault();i.focus();}}};
    window.addEventListener('keydown',h);return ()=>window.removeEventListener('keydown',h);
  },[]);
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100vh',minHeight:'900px',width:'1440px',background:'var(--bg-canvas)',overflow:'hidden'}}>
      <TitleBar/>
      <div style={{display:'flex',flex:1,minHeight:0}}>
        <Sidebar active={active} onNavigate={setActive} />
        <main style={{flex:1,minWidth:0,overflowY:'auto',padding:'var(--shell-gutter)'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--stack-gap)',maxWidth:'var(--content-max)'}}>
            <SecretsView/>
          </div>
        </main>
      </div>
    </div>
  );
}

Object.assign(window,{Console});
