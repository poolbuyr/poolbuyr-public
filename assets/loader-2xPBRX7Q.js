const u=`---
title: "Welcome to the Poolbuyr Blog"
author: "Sarah Jenkins"
date: "2026-07-19"
slug: "welcome-to-poolbuyr"
excerpt: "Introducing our new blog — a space to explore group buying, collective purchasing power, and how neighborhoods are saving money together."
tags:
  - community
  - introduction
published: true
---

Welcome to the very first post on the Poolbuyr blog!

This space is dedicated to exploring one of the most underrated ideas in modern commerce: **buying together**. Whether you're a seasoned co-op organizer or someone who's just tired of paying full price for everything, you're in the right place.

## What is Poolbuyr?

Poolbuyr is a platform that helps you organize group purchases with neighbors, friends, and local communities. Instead of buying that bulk pack of paper towels or that case of organic olive oil by yourself, you pool your order with others and unlock volume discounts that are usually reserved for businesses.

## What You'll Find Here

Over the coming weeks and months, we'll be publishing articles covering:

- **The math behind group buying** — how much can you *really* save?
- **Neighborhood co-op success stories** — real people, real savings
- **How to organize your first group purchase** — step-by-step guides
- **The environmental angle** — fewer deliveries, less packaging, lower emissions

## Stay Tuned

This blog is brand new, and there's a lot more coming. If there's a topic you'd like us to cover, or if you've had a great experience with a group buy that you'd like to share, we'd love to hear from you.

Happy pooling!
`;function c(a){const r=a.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!r)throw new Error("Missing frontmatter");const l=r[1],h=r[2].trim(),o={};let t="",e=[];for(const s of l.split(`
`)){const i=s.match(/^(\w+):\s*(.*)/);if(i){if(t&&e.length&&(o[t]=e.length>1?e:e[0]),t=i[1],e=[],t==="tags")continue;const n=i[2].trim();n&&e.push(n.replace(/^"(.*)"$/,"$1"))}else if(t==="tags"){const n=s.match(/^\s+-\s+(.*)/);n&&e.push(n[1].trim())}else if(t){const n=s.trim();n&&e.push(n.replace(/^"(.*)"$/,"$1"))}}return t&&e.length&&(o[t]=e.length>1?e:e[0]),{meta:{title:String(o.title||""),author:String(o.author||""),date:String(o.date||""),slug:String(o.slug||""),excerpt:String(o.excerpt||""),tags:Array.isArray(o.tags)?o.tags:[],published:o.published!==!1},content:h}}export{u as _,c as p};
