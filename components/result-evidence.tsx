"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { useSite } from "@/components/site-provider";
import { evidenceItems, evidenceCopy, type EvidenceItem, type EvidenceCategory } from "@/content/result-evidence";

function EvidenceFrame({ item, index }: { item: EvidenceItem; index: number }) {
  const { lang } = useSite();
  const copy = evidenceCopy[lang];
  const [failed, setFailed] = useState(false);
  const imageReady = Boolean(item.src) && !failed;
  const frame = imageReady
    ? <img src={item.src!} alt={item.alt[lang]} width={1440} height={900} loading="lazy" decoding="async" onError={() => setFailed(true)} />
    : <div className="evidence-empty"><span className="evidence-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span className="micro">{copy.pending}</span></div>;
  return <figure className={`evidence-item evidence-${item.category}`} data-evidence-id={item.id} data-responsive-module>
    {imageReady ? <Dialog><DialogTrigger asChild><button type="button" className="evidence-frame evidence-open" data-spotlight data-depth aria-label={`${copy.zoom} — ${item.title[lang]}`}>{frame}<span className="evidence-zoom">{copy.zoom}<span aria-hidden="true">↗</span></span></button></DialogTrigger>
      <DialogContent className="evidence-lightbox" showCloseButton={false}>
        <div className="evidence-lightbox-bar"><DialogTitle>{item.title[lang]}</DialogTitle><DialogClose className="action-link">{copy.close}<span aria-hidden="true">×</span></DialogClose></div>
        <DialogDescription className="sr-only">{item.alt[lang]}</DialogDescription>
        <img src={item.src!} alt={item.alt[lang]} width={1440} height={900} />
      </DialogContent></Dialog> : <div className="evidence-frame">{frame}</div>}
    <figcaption><span>{item.title[lang]}</span><span className="micro">{copy[item.category]}</span></figcaption>
  </figure>;
}

export function ResultEvidence() {
  const { lang } = useSite();
  const copy = evidenceCopy[lang];
  const filters: ("all" | EvidenceCategory)[] = ["all", "website", "platform", "creator"];
  return <section id="evidence" className="result-evidence" aria-labelledby="evidence-title">
    <div className="evidence-heading"><div><p className="micro">{copy.eyebrow}</p><h2 id="evidence-title">{copy.title}</h2></div><span className="evidence-total" aria-hidden="true">08</span></div>
    <Tabs defaultValue="all" className="evidence-browser">
      <TabsList className="evidence-filters" aria-label={copy.title}>{filters.map(filter => <TabsTrigger key={filter} value={filter}>{copy[filter]}<span>{filter === "all" ? "08" : String(evidenceItems.filter(item => item.category === filter).length).padStart(2, "0")}</span></TabsTrigger>)}</TabsList>
      {filters.map(filter => <TabsContent key={filter} value={filter} className="evidence-grid">{evidenceItems.map((item, index) => filter === "all" || item.category === filter ? <EvidenceFrame key={item.id} item={item} index={index} /> : null)}</TabsContent>)}
    </Tabs>
  </section>;
}
