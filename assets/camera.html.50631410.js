import{_ as e}from"./objects.cb3383aa.js";import{_ as n,a,b as r,c as i,d as s,e as t,f as d,g as l}from"./Vis_Datei_Manager.3bf98db6.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as h,e as u}from"./app.d45c49f3.js";const m={},p=u('<h2 id="aktivierung-von-bewegungserkennung" tabindex="-1"><a class="header-anchor" href="#aktivierung-von-bewegungserkennung" aria-hidden="true">#</a> Aktivierung von Bewegungserkennung</h2><p>In den commands (auf dem <a href="#bild-nr-1">Bild Nr.: 1</a> die Nr.: 7)</p><h3 id="bild-nr-1" tabindex="-1"><a class="header-anchor" href="#bild-nr-1" aria-hidden="true">#</a> Bild Nr.: 1</h3><p><img src="'+e+'" alt="objects.png" loading="lazy"> findet ihr den Button (auf dem <a href="#bild-nr-2">Bild Nr.:2</a> die Nr.: 1) um eine Kameraaufnahme (camshot) auszul\xF6sen,</p><h3 id="bild-nr-2" tabindex="-1"><a class="header-anchor" href="#bild-nr-2" aria-hidden="true">#</a> Bild Nr.: 2</h3><p><img src="'+n+'" alt="Obj_commands.png" loading="lazy"> dies ist aber erst dann m\xF6glich wen der state motionDetection (auf dem <a href="#bild-nr-2">Bild Nr.: 2</a> die Nr.: 2) auf <span style="color:red;font-size:1.5rem;">true</span> gesetzt wird.</p><div class="custom-container warning"><p class="custom-container-title">Achtung</p><p><strong>das Aktivieren von motionDetection (Bewegungserkennung) verursacht einen h\xF6heren Energieverbrauch des Tablets!</strong></p></div><p>dies kann man entweder manuell auf <span style="color:red;font-size:1.5rem;">true</span> setzen oder es den Adapter automatisch machen lassen, sobald man auf den Button klickt. Um den Adapter das Aktivieren von dem Datenpunkt motionDetection zu erlauben, m\xFCsst ihr in der Adapter Konfigurations Seite unter Bildaufnahme, in <strong>Automatische Aktivierung von Motion Detection</strong> (auf dem <a href="#bild-nr-3">Bild Nr.: 3</a>)</p><h3 id="bild-nr-3" tabindex="-1"><a class="header-anchor" href="#bild-nr-3" aria-hidden="true">#</a> Bild Nr.: 3</h3><p><img src="'+a+'" alt="MotionDetect-Mode.png" loading="lazy"></p><p>in der Auswahl von Manuell auf Automatisch umschalten, dann wird der Adapter beim Starten \xFCberpr\xFCfen, ob die Bewegungserkennung im FullyBrowser aktiviert ist und dem entsprechenden Datenpunkt motionDetection anpassen, sobald man jetzt auf den Button f\xFCr die Kameraaufnahme dr\xFCckt (auf dem <a href="#bild-nr-2">Bild Nr.: 2</a> die Nr.: 1) wird der Adapter den Datenpunkt motionDetection (auf dem <a href="#bild-nr-2">Bild Nr.: 2</a> die Nr.: 2) auf <span style="color:red;font-size:1.5rem;">true</span> setzen, falls es n\xF6tig ist und danach ein Bild machen.</p><div class="custom-container warning"><p class="custom-container-title">Achtung</p><p><strong>das Deaktivieren von motionDetection (Bewegungserkennung) falls man es nicht mehr braucht muss in beiden fehlen manuell get\xE4tigt werden dazu muss der Datenpunkt motionDetection (auf dem <a href="#bild-nr-2"><span style="color:#63b4f4;">Bild Nr.: 2</span></a> die Nr.: 2) auf <span style="color:red;font-size:1.5rem;">false</span> setzen.</strong></p></div><h2 id="aufnahmemodus-konfiguration" tabindex="-1"><a class="header-anchor" href="#aufnahmemodus-konfiguration" aria-hidden="true">#</a> Aufnahmemodus Konfiguration</h2><p>In der <strong>Auswahl der Art des Aufnahmemodus</strong> k\xF6nnt ihr entscheiden wie die Bilder gemacht werden sollen (<a href="#bild-nr-4">Bild Nr.: 4</a>)</p><h3 id="bild-nr-4" tabindex="-1"><a class="header-anchor" href="#bild-nr-4" aria-hidden="true">#</a> Bild Nr.: 4</h3><p><img src="'+r+'" alt="recording_mode" loading="lazy"> ihr hab die Auswahl zwischen Einzelaufnahme und Serienaufnahme, je nachdem was ausgew\xE4hlt wurde ver\xE4ndern sich die weiteren Einstellungen. <br> bei der Einzelaufnahme (<a href="#bild-nr-5">Bild Nr.: 5</a>) habt ihr nur eine auswahl, bei der ihr angeben, k\xF6nnt wie viele bilder gespeichert werden bevor sie wieder \xFCberschrieben werden (<span style="color:red;"> MAX 30 Bilder einstellbar </span>)</p><div class="custom-container warning"><p class="custom-container-title">Achtung</p><p><strong><span style="color:red;font-size:1.5rem;">Um 0 Uhr wird der Z\xE4hler wieder auf 0 gesetzt somit werden die Bilder immer angefangen ab 0 Uhr mit Bild Nr.: 1 anfangen.</span></strong></p></div><h3 id="bild-nr-5" tabindex="-1"><a class="header-anchor" href="#bild-nr-5" aria-hidden="true">#</a> Bild Nr.: 5</h3><p><img src="'+i+'" alt="single_shot_mode" loading="lazy"></p><p>In dem Serienaufnahme-Modus habt ihr die M\xF6glichkeit:</p><ul><li>anzugeben wie viele Bilder in Folge gemacht werden sollen (<span style="color:red;"> MAX 30 Bilder einstellbar </span>) (auf dem <a href="#bild-nr-6">Bild Nr.: 6</a> <span style="color:red;"> die Nr.: 1</span>)</li><li>wie viele Bilder gespeichert werden sollen (<span style="color:red;"> MAX 30 Bilder einstellbar </span>) (auf dem <a href="#bild-nr-6">Bild Nr.: 6</a> <span style="color:blue;">die Nr.: 2</span>)</li><li>und in welchen abstand die bilder gemacht werden ( <span style="color:red;">MIN 1s / MAX 5s</span> ) (auf dem <a href="#bild-nr-6">Bild Nr.: 6</a> <span style="color:green;">die Nr.: 3</span>)<div class="custom-container warning"><p class="custom-container-title">Achtung</p><p><strong><span style="color:red;font-size:1.5rem;">Um 0 Uhr wird der Z\xE4hler wieder auf 0 gesetzt somit werden die Bilder immer angefangen ab 0 Uhr mit Bild Nr.: 1 anfangen.</span></strong></p></div></li></ul><h3 id="bild-nr-6" tabindex="-1"><a class="header-anchor" href="#bild-nr-6" aria-hidden="true">#</a> Bild Nr.: 6</h3><p><img src="'+s+`" alt="series_recording_mode" loading="lazy"></p><h2 id="objecte-fur-die-kameraaufnahmen" tabindex="-1"><a class="header-anchor" href="#objecte-fur-die-kameraaufnahmen" aria-hidden="true">#</a> Objecte f\xFCr die Kameraaufnahmen</h2><p>Die Bild URL wird unter den device_info in den state <strong>camshotUrl</strong> abgespeichert (<a href="#bild-nr-7">Bild Nr.: 7</a> je nachdem wie viele Bilder gemacht werden erh\xF6ht sich die anzahl der URLs in dem Object z.B.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token string-property property">&quot;Nr1&quot;</span><span class="token operator">:</span><span class="token string">&quot;/fully-tablet-control.admin/media/camshot_samsung_1.png&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;Nr2&quot;</span><span class="token operator">:</span><span class="token string">&quot;/fully-tablet-control.admin/media/camshot_samsung_2.png&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>der state <strong>camshot64</strong> zeigt dann immer das letzte gemachte Bild an.</p><h3 id="bild-nr-7" tabindex="-1"><a class="header-anchor" href="#bild-nr-7" aria-hidden="true">#</a> Bild Nr.: 7</h3><p><img src="`+t+`" alt="Objects_camshotUrl" loading="lazy"></p><h2 id="speicherort" tabindex="-1"><a class="header-anchor" href="#speicherort" aria-hidden="true">#</a> Speicherort</h2><p>Hier noch eine kleine \xDCbersicht wo die Bilder zu finden sind:</p><ul><li><strong>FTP:</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/opt/iobroker/iobroker-data/files/fully-tablet-control.admin/media/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+'" alt="SFTP_obj" loading="lazy"></p><ul><li><strong>Vis Datei Manager:</strong> <br><img src="'+l+'" alt="Vis_Datei_Manager" loading="lazy"></li></ul>',35),g=[p];function b(f,v){return c(),h("div",null,g)}var N=o(m,[["render",b],["__file","camera.html.vue"]]);export{N as default};
