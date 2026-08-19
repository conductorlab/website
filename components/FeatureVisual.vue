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
          <span class="check" aria-hidden="true">✓</span>
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
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow);
  padding: 22px;
  overflow: hidden;
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
  color: var(--accent);
}
.status {
  margin-left: auto;
  font-size: 12px;
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
}
.bar-col {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 3px;
  height: 100%;
}
.bar-seg {
  border-radius: 3px;
}
.bar-seg.strong {
  background: var(--border-strong);
}
.bar-seg.accent {
  background: var(--accent);
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
  box-shadow: 0 0 0 4px var(--accent-soft);
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
  border-radius: 12px;
  background: var(--panel);
}
.hub-icon-inner {
  width: 15px;
  height: 15px;
  background: var(--accent);
  border-radius: 3px;
  transform: rotate(45deg);
}
.connector {
  width: 44px;
  height: 96px;
  border-left: 2px solid var(--border-strong);
  border-top: 2px solid var(--border-strong);
  border-bottom: 2px solid var(--border-strong);
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
