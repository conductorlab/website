<script setup lang="ts">
import type { FeatureVisual } from '~/content/site-content'

defineProps<{ visual: FeatureVisual }>()
</script>

<template>
  <div class="feat-vis visual" :class="visual.kind">
    <template v-if="visual.kind === 'readiness'">
      <div class="panel-head">
        <span class="mono muted">{{ visual.panelLabel }}</span>
        <span class="status-pill">
          <span class="pill-dot" aria-hidden="true" />{{ visual.badge }}
        </span>
      </div>
      <div class="checklist">
        <div v-for="item in visual.checklist" :key="item.label" class="checklist-item">
          <span class="check" aria-hidden="true">
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
              <path d="M1 3.6L3.3 5.8L8 1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          {{ item.label }}
          <span class="mono status">{{ item.status }}</span>
        </div>
      </div>
    </template>

    <template v-else-if="visual.kind === 'channel'">
      <div class="panel-head channel-head">
        <span class="mono muted">{{ visual.panelLabel }}</span>
        <span class="legend">
          <span class="legend-item"><span class="swatch accent" aria-hidden="true" />{{ visual.legend?.converted }}</span>
          <span class="legend-item faint"><span class="swatch strong" aria-hidden="true" />{{ visual.legend?.dropped }}</span>
        </span>
      </div>
      <div class="bars">
        <div v-for="(bar, i) in visual.bars" :key="i" class="bar-col">
          <div class="bar-seg strong" :style="{ height: bar.droppedPct + '%' }" />
          <div class="bar-seg accent" :style="{ height: bar.convertedPct + '%' }" />
        </div>
      </div>
    </template>

    <template v-else-if="visual.kind === 'spec'">
      <div class="panel-head">
        <span class="mono muted">{{ visual.panelLabel }}</span>
        <span class="status-pill">{{ visual.badge }}</span>
      </div>
      <div class="steps">
        <template v-for="(step, i) in visual.steps" :key="step.label">
          <div class="step" :class="step.state">
            <span class="step-dot" aria-hidden="true" />
            <span class="mono step-label">{{ step.label }}</span>
          </div>
          <div
            v-if="visual.steps && i < visual.steps.length - 1"
            class="step-line"
            :class="{
              accent: visual.steps[i + 1].state === 'current',
              upcoming: step.state === 'current',
            }"
          />
        </template>
      </div>
    </template>

    <template v-else-if="visual.kind === 'surfaces'">
      <div class="surfaces-row">
        <div class="hub">
          <span class="hub-icon" aria-hidden="true"><span class="hub-icon-inner" /></span>
          <span class="mono">{{ visual.hub }}</span>
        </div>
        <div class="connector" aria-hidden="true" />
        <div class="surface-list">
          <div
            v-for="s in visual.surfaces"
            :key="s.label"
            class="surface-item"
            :class="{ dashed: !s.active }"
          >
            <span v-if="s.active" class="surface-dot" aria-hidden="true" />
            {{ s.label }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.visual {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
  padding: 22px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.visual:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
.visual::before {
  content: '';
  position: absolute;
  top: -45%;
  right: -25%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 72%);
  opacity: 0.7;
  pointer-events: none;
  z-index: -1;
}
.visual.spec,
.visual.surfaces {
  padding: 26px 22px;
}

.mono {
  font-family: 'Geist Mono', monospace;
}
.muted {
  color: var(--text-muted);
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid var(--border);
  font-size: 13px;
}
.channel-head {
  padding-bottom: 16px;
  margin-bottom: 18px;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 100px;
  background: var(--accent-soft);
  color: var(--accent);
  font-family: 'Geist Mono', monospace;
  font-size: 12px;
}
.pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 2.4s ease-in-out infinite;
}

.checklist {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.checklist-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--text);
}
.check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
}
.status {
  margin-left: auto;
  padding: 2px 9px;
  border-radius: 100px;
  background: var(--surface-2);
  font-size: 11px;
  letter-spacing: 0.02em;
  color: var(--text-muted);
}

.legend {
  display: flex;
  gap: 14px;
  font-family: 'Geist Mono', monospace;
  font-size: 11.5px;
}
.legend-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--text-muted);
}
.legend-item.faint {
  color: var(--text-muted);
}
.swatch {
  width: 8px;
  height: 8px;
  border-radius: 2px;
}
.swatch.accent {
  background: var(--accent);
}
.swatch.strong {
  background: var(--border-strong);
}

.bars {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 120px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}
.bar-col {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
  height: 100%;
}
.bar-seg {
  border-radius: 4px;
  transition: filter 0.2s ease;
}
.bar-col:hover .bar-seg {
  filter: brightness(1.08);
}
.bar-seg.strong {
  background: linear-gradient(180deg, var(--border-strong), var(--border));
}
.bar-seg.accent {
  background: linear-gradient(180deg, var(--accent-hover), var(--accent));
}

.steps {
  display: flex;
  align-items: center;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.step-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--border-strong);
  background: var(--bg);
  display: block;
}
.step.current .step-dot {
  width: 14px;
  height: 14px;
  border: none;
  background: var(--accent);
  animation: ring-pulse 2.4s ease-in-out infinite;
}
@keyframes ring-pulse {
  0%, 100% { box-shadow: 0 0 0 4px var(--accent-soft); }
  50% { box-shadow: 0 0 0 7px var(--accent-soft); }
}
.step.next .step-dot {
  border-style: dashed;
}
.step-label {
  font-size: 12px;
  color: var(--text-muted);
}
.step.current .step-label {
  color: var(--accent);
}
.step-line {
  flex: 1 1 0;
  height: 2px;
  background: var(--border-strong);
  margin: 0 4px 22px;
}
.step-line.accent {
  background: var(--accent);
}
.step-line.upcoming {
  background: repeating-linear-gradient(90deg, var(--border-strong) 0 5px, transparent 5px 10px);
  animation: dash-shift 1s linear infinite;
}
@keyframes dash-shift {
  to { background-position: 10px 0; }
}

.surfaces-row {
  display: flex;
  align-items: center;
  gap: 18px;
}
.hub {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  font-size: 12px;
  color: var(--text);
}
.hub-icon {
  width: 52px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-strong);
  border-radius: 14px;
  background: linear-gradient(145deg, var(--panel), var(--surface-2));
  box-shadow: var(--shadow);
}
.hub-icon-inner {
  width: 15px;
  height: 15px;
  background: var(--accent);
  border-radius: 4px;
  transform: rotate(45deg);
}
.connector {
  width: 44px;
  height: 96px;
  border-left: 1.5px solid var(--border-strong);
  border-top: 1.5px solid var(--border-strong);
  border-bottom: 1.5px solid var(--border-strong);
  border-radius: 16px 0 0 16px;
  flex-shrink: 0;
}
.surface-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 0;
}
.surface-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--panel);
  font-size: 14px;
  color: var(--text);
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.surface-item:not(.dashed):hover {
  border-color: var(--border-strong);
  transform: translateX(2px);
}
.surface-item.dashed {
  border: 1px dashed var(--border-strong);
  color: var(--text-muted);
  font-family: 'Geist Mono', monospace;
  background: transparent;
}
.surface-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}
</style>
