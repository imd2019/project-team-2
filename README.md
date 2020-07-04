# Dokumentation

## Klassenbeschreibung: 
### DisplayObject

#### Constructor
  Der Constructor verlangt **x**, **y**. Setzt alle unten aufgeführten Attribute.
<br>
<br>

#### Attribute
|name|Bescheibung|
| --- | --- |
|**x**|Aktuelle X-Position (in abhängikeit von Elternobjekt, wenn es eines gibt!)|  
|**y** |Aktuelle Y-Position (in abhängikeit von Elternobjekt, wenn es eines gibt!)|
|**imageWidth** |Breite, in welcher das aktuelle Bild des Objektes gezeichnet wird|  
|**imageHeight** |Höhe, in welcher das aktuelle Bild des Objektes gezeichnet wird|  
|**rot** |Aktuelle Rotation des Objektes in Bogenmaß|
|**scale** |Skallierung des gezeichneten Bildes und der draw-Funktion. 1 = 100% / 0.5 = 50%|
|**images** |Eine Liste, welche unter einem bestimmten Schlüsselstring ein bestimmtes Bild abspeichert|
|**doms** |Eine Liste welche unter einem bestimmten Schlüsselstring ein bestimmtes Video oder Gif abspeichert|
|**currentImage** |Das Bild, welches gerade ausgewählt ist|
|**currentDom** |Das Video oder Gif, welches gerade ausgewählt ist|
|**offsetX** |Die Verschiebung, um welches das aktuelle Bild des Objektes beim Zeichnen in X-Richtung verschoben wird.|
|**offsetY** |Die Verschiebung, um welches das aktuelle Bild des Objektes beim Zeichnen in Y-Richtung verschoben wird.|
|**visible** |Bestimmt, ob das Objekt dargestellt wird oder nicht. True: das aktuelle Image wird gezeichnet und die Draw-Funktion ausgeführt.| 
|**parent** |Wenn das Objekt einem anderem Objekt(einem Elternobjekt) als Child zugewiesen wird, wird hier das Elternobejekt gespeichert.|
<br>
<br>

#### Methoden
| Name | Aufruf | Beschreibung|Leer|
| --- | --- | --- | --- |
|  draw() | jeden Frame | Die Funktion sollte allen Code enthalten, der mit dem Aussehen des Objektes zu tun hat. Auch wird alles, was hier gezeichnet wird über das Image des Objektes gelegt. Hier könnte man mit P5 Objekten Arbeiten(Rect, text, etc.).| ja |
|  update() | jeden Frame | Die Funktion sollte allen Code enthalten, der mit Updates von dem Objekt zu tun hat. Hier könnte man Variablen etc. prüfen und anpassen.| ja |
|  init() | wird beim Start der Anwedung ausgeführt | Hier sollten Child Objekte erstellt und Bilder zugewiesen werden. Auch kann hier diverses andere definiert werden. Attribute sollten immer noch im Konrstrukter angelegt werden!!| ja |
|  hide(hide) | custom | Kann mit oder ohne Arguemnt ausgeführt werden. Ohne Angabe wird das Objekt unsichtbar gemacht. Mit der Angabe true wird das Objekt wieder sichtbar. Hat keinen Einfluss auf Videos oder Gifs! Diese müssen extra angezeigt und versteckt werden siehe showDom/hideDom| nein |
|  setRotationInDegree(`degree`) | custom |Rechnet die angegebenen `degree` in Bogenmaß um und setzt **rot** neu.| nein |
|  setOffset(`x`,`y`) | custom |Setzt das Offset für die **draw** und für das **currentImage** neu. Dom Offsets müssen extra über setDomOffset gesetzt werden.| nein |
|  addImage(`key`,`image`) | custom | Fügt ein `image` mit dem Schlüssel `key` der **images** Liste hinzu| nein |
|  switchImage(`key`) | custom | Wechselt das **currentImage** des Obejektes auf das image mit dem Schlüssel `key` aus der **images** Liste| nein |
|  setImageSize(`width`,`height`) | custom |Setzt die **imageWidth** auf `width` und die **imageHeight** auf `height`. Setzt nur die Bildgröße neu.| nein |
|  addDom(`key`,`dom`) | custom | Fügt ein `dom` mit dem Schlüssel `key` der **doms** Liste hinzu. Doms bezeichnet in dem Fall Videos oder Gifs| nein |
|  switchDom(`key`) | custom | Wechselt das **currentDom** des Obejektes auf das Gif oder Video mit dem Schlüssel `key` aus der **doms** Liste. Wenn vorher ein Dom ausgewählt wurde, wird es automatisch versteckt.| nein |
|  setDomSize(`width`,`height`) | custom |Setzt die Breite des aktuell ausgewählten Gifs oder Video auf `width` und die Höhe auf `height`. Setzt nur die Größe des aktuellen Video oder Gifs neu!| nein |
|  showDom() | custom |Zeigt das aktuell ausgewählte Dom an.| nein |
|  hideDom() | custom |Versteckt das aktuell ausgewählte Dom an.| nein |
|  playDom() | custom |Spielt das aktuell ausgewählte Dom ab. Wird nur bei Videos benutzt.| nein |
|  stopDom() | custom |Stoppt das aktuell ausgewählte Dom. Wird nur bei Videos benutzt.| nein |
|  setDomOffset(`x`,`y`) | custom |Setzt ein Offset für das aktuell ausgewählte Dom| nein |
|  display() | custom |Verwaltet die Reinfolge der Anzeigen von draw und currentImage. Wendet auch die angegebenen Transformationen(Rotation und Offset) an.| nein |
|  getRealXY() | custom |Gibt die echten Koordinaten auf dem Canvas als Objekt zurück.| nein |
<br>
<br>
<br>
<br>

### InteractiveObject extendes DisplayObejct

#### Constructor
  Der Constructor verlangt **x**, **y**, **width**, **height**, **shape**. Setzt alle unten aufgeführten Attribute. Außerdem wird die imageWidth und imageHeight gleich width und height gesetzt.
<br>
<br>

#### Attribute
|name|Bescheibung|
| --- | --- |
|**width**|Setzt die Breite der Hitbox. Bei einem ROUND Shape zählt nur dieser Wert.|  
|**height** |Setzt die Höhe der Hitbox.|
|**shape** |Bestimmt das Shape der Hitbox. Auch wird hier bestimmt, wie das Bild des Obejektes gezeichnet wird. RECT Shapes beginnen oben Links, ROUND Shapes beginnen in der Mitte|  
|**enabled** |Bestimmt true/false , ob das Objekt interagierbar ist.(Anklickbar, Update, etc)|
|**children** |Speichert die Kinder des Obejektes in einem Array|
|**hovered** |Ist true/false, je nachdem ob das Objekt gehovered wird oder nicht.|
|**waitStarttime** |Wenn die Funktion wait() aufgerufen wird, wird hier die Startzeit des Wartepunktes zwischengespeichert.|
|**waitTime** |Speichert die Zeit die gewartet werden soll, wenn wait() aufgerufen wird in Sekunden.|
|**rotationOffsetX** |Verschiebung des Rotationspunktes in X-Richtung|
|**rotationOffsetY** |Verschiebung des Rotationspunktes in Y-Richtung|
|**scaleOffsetX** |Verschiebung des Skalierungspunktes in X-Richtung|
|**scaleOffsetY** |Verschiebung des Skalierungspunktes in Y-Richtung|
<br>
<br>

#### Methoden
| Name | Aufruf | Beschreibung|Leer|
| --- | --- | --- | --- |
|  onInit() | Am Anfang der Anwendung | Löst die onInit()-Funktion bei allen **children** aus, welche Interactive Objects sind. Ansonsten wird init() aufgerufen.| nein |
|  onUpdate() | jeden Frame | Löst die onUpdate()-Funktion bei allen **children** aus, welche Interactive Objects sind. Ansonsten wird update() aufgerufen. Wird nur ausgeführt, wenn die waitStartTime === 0 ist und das Objekt enabled ist.| nein |
|  enable(`hide`) | custom | Kann mit oder ohne Argument ausgeführt werden.**Enabeld** wird auf true gesetzt. Wenn es `ohne Argument` aufgerufen wird, wird das Objekt auch eingeblendet. Wenn `true übergeben` wird, wird das Objekt versteckt. Führt am Ende onEnable() aus.| nein |
|  onEnable | nach enable() | Hier ist Platz, um Aktionen nach enable() auszuführen.| ja |
|  disable(`hide`) | custom | Kann mit oder ohne Argument ausgeführt werden.**Enabeld** wird auf false gesetzt. Wenn es `ohne Argument` aufgerufen wird, wird das Objekt versteckt. Wenn `false übergeben` wird, wird das Objekt angezeigt.| nein |
|  onDisable | nach disable() | Hier ist Platz, um Aktionen nach disable() auszuführen.| ja |
|  hitTest(`x`,`y`,`debug`) | custom | Überprüft ob der Punkt(`x`, `y`) in dem Objekt liegt. Gibt true oder false zurück. Wenn für `debug` true übergeben wird, wird die aktuelle Mausposition und der rotierte Vektor ausgegeben. Auch werden alle Hitboxen beim Ausführen rot umrandet. | nein |
|  setHitboxSize(`w`,`h`) | custom | Ändert die Breite und Höhe der Hitbox auf `w` und `h` | nein |
|  scaleSize(`amount`) | custom | Skaliert das Objekt und die Hitbox um `amount` | nein |
|  resize(`sizeX`,`sizeY`) | custom | Ändert die Breite und Höhe der Hitbox, des angezeigten Bildes und des **currentDom** auf einen schlag.(**width**, **height**, **imageWidth**, **imageHeight**, setDomSize()) | nein |
|  setRotationOffset(`x`,`y`) | custom | Setzt **rotationOffsetX**  auf `x` und **rotationOffsetY**  auf `y`.| nein |
|  setScaleOffset(`x`,`y`) | custom | Setzt **scaleOffsetX**  auf `x` und **scaleOffsetY**  auf `y`.| nein |
| wait(`sek`) | custom | Setzt **waitTime** auf `sek` und rechnet `sek` in Millisekunden um. Das Objekt ist nicht mehr interaktiv. (update und die ganzen Mouseevents werden nicht mehr aufgerufen).| nein |
| addChild(`obj`) | custom |Fügt das `obj` hinten an die **children** Liste an.| nein |
| removeChild(`obj`) | custom |Entfernt das `obj` von **children** Liste.| nein |
| clicked() | Nach dem die Maus geklickt wurde |Die Funktion ist Standard mäßig leer. Sie kann in erbenden Klassen geändert werden. Sie wird nur aufgerufen wenn die Maus über diesem Objekt ist.| ja |
| released() | Nach dem die Maus losgelassen wurde |Die Funktion ist Standard mäßig leer. Sie kann in erbenden Klassen geändert werden. Sie wird nur aufgerufen wenn die Maus über diesem Objekt ist.| ja |
| pressed() | Wird *einmal* aufgerufen, wenn die Maus gepresst wird |Die Funktion ist Standard mäßig leer. Sie kann in erbenden Klassen geändert werden. Sie wird nur aufgerufen wenn die Maus über diesem Objekt ist.| ja |
| hover() | Während die Maus über den Objekt hovered |Die Funktion ist Standard mäßig leer. Sie kann in erbenden Klassen geändert werden. Sie wird nur aufgerufen wenn die Maus über diesem Objekt ist.| ja |
| hoverEnd() |  Wenn ein Hover endet |Sie ist für alle Logik da die beim Ende eines Hovers stattfinden sollen.| ja |
| mouseClicked() | Nach dem die Maus geklickt wurde |Ruft erst clicked() der in **children** gespeicherten Objekte auf, dann ihre eigene.| nein |
| mouseReleased() | Nach dem die Maus losgelassen wurde |Ruft erst released() der in **children** gespeicherten Objekte auf, dann ihre eigene.| nein |
| mousePressed() |  Wird *einmal* aufgerufen, wenn die Maus gepresst wird |Ruft erst pressed() der in **children** gespeicherten Objekte auf, dann ihre eigene.| nein |
| onKeyPressed() |  Wenn eine Taste auf der Tastatur gerückt wird| Ruft erst onKeyPressed() der in **children** gespeicherten InteractiveObjects auf, dann das eigene keyPressed() | nein |
| keyPressed() |  Nach onKeyPressed()| Platz für Aktionen, welche durch die Tastatur ausgeführt werden sollen. | ja |
| mouseHover() |   Während die Maus über den Objekt hovered  |Ruft erst hovered() der in **children** gespeicherten Objekte auf, dann ihre eigene. Setzt **hovered** auf true, wenn das Objekt gehovered wird, ansonsten auf false. Außerdem ruft es hoverEnd auf, wenn der Hover endet.| nein |
| display() | custom |Überschreibt die Display Funktion von displayObject. Sorgt erst für die eigene Dastellung, und führt danach die display() Methoden der Kinder aus| nein |
| rotateRealPoint(`x`, `y`) | custom |Rotiert den Punkt(`x`, `y`), um die Achse und Rotation des Objekts und aller Eltern Objekte.| nein |
| getRealRotation() | custom |Gibt die Summe der eigenen Rotation mit der Rotation der Eltern Objekte zurück.| nein |
<br>
<br>
<br>
<br>

### MoveableObject extendes InteractiveObejct

#### Constructor
Der Constructor verlangt **x**, **y**, **width**, **height**, **shape**. Setzt alle unten aufgeführten Attribute. **minSpeed** und **maxSpeed** sind am Anfang 0!.
<br>
<br>

#### Attribute
|name|Bescheibung|
| --- | --- |
|**velocity**|Speichert die aktuelle Geschwindigkeit als Objekt.{x: X-Geschwindigkeit, y: Y-Geschwindigkeit}|
|**acceleration**|Speichert die aktuelle Beschleunigung als Objekt.{x: X-Beschleunigung, y: Y-Beschleunigung}|
|**maxSpeed**|Speichert die maximale **velocity** als Objekt.{x: X-Max-Geschindigkeit, y: Y-Max-Geschindigkeit}|
|**minSpeed**|Speichert die minimale **velocity** als Objekt.{x: X-Max-Geschindigkeit, y: Y-Min-Geschindigkeit}|
|**rotVelocity**|Speichert die aktuelle Rotationsgeschwindigkeit als in Bogenmaß|
|**rotAcceleration**|Speichert die aktuelle Rotationsbeschleunigung als in Bogenmaß|
|**maxRotSpeed**|Speichert die maximale **rotVelocity** in Bogenmaß |
|**minRotSpeed**|Speichert die minimale **rotVelocity** in Bogenmaß |
<br>
<br>

#### Methoden
| Name | Aufruf | Beschreibung|Leer|
| --- | --- | --- | --- |
|  setCoordinats(`x`,`y`) | custom | Setzt die **x** Koordinate auf `x` und die **y** Koordinate auf `y`| nein |
|  move() | custom | Bewegt das Objekt anhand von den Attributen. Die **velocity** wird um die **acceleration** erhöt. Das gleiche passiert für die Rotation. Auch wird überprüft, dass die minimalen und Maximalen nicht unter oder über schritten werden.| nein |
|  setAcceleration(`x`,`y`) | custom | Setzt die X-Beschleunigung auf `x` und die Y-Beschleunigung auf `y`| nein |
|  setVelocity(`x`,`y`) | custom | Setzt die X-Geschwindigkeit auf `x` und die Y-Geschwindigkeit auf `y`| nein |
|  setMaxMinSpeed(`max`,`min`) | custom | `min` muss nicht angegeben werden und wird standardmäßig auf 0 gesetzt. Die Methode setzt sowohl **x** als auch **y** **minSpeed** und **maxSpeed**| nein |
|  setRotationAcceleration(`degree`) | custom | Rechnet `degree` in Bogenmaß um, und setzt die **rotAcceleration** auf den Wert.| nein |
|  setRotMaxMinSpeed(`max`, `min`) | custom | `min` muss nicht angegeben werden und wird standardmäßig auf 0 gesetzt. Die Methode setzt **maxRotSpeed** auf `max` und **minRotSpeed** auf `min`| nein |
|  getVelocity() | custom | Gibt ein Objekt zurück: {rot: **rotVelocity**, x: **velocity.x**, y: **velocity.y** }| nein |
|  stop() | custom | Setzt **velocity.x**, **velocity.y**, **acceleration.x**, **acceleration.y** **rotVelocity** und **rotAcceleration** auf 0| nein |
|  onHit() | custom, aber eher von außerhalb | Kann aufgerufen werden, wenn dieses Objekt mit einem anderem Objekt kollidiert. Muss allerdings von außen und 
<br>
<br>
<br>
<br>

### Button extendes InteractiveObejct

#### Constructor
Der Constructor verlangt **x**, **y**, **width**, **height**, **shape**, **event**. Setzt alle unten aufgeführten Attribute.
<br>
<br>

#### Attribute
|name|Bescheibung|
| --- | --- |
|**animationTime**|Speichert den linearen Fortschritt der Animation 1 = 100% |
|**animationProgress**|Speichert den durch die jeweilige Animationsfunktion errechneten Fortschritt der Animation 1 = 100%|
|**animationSpeed**|legt den Wert fest, um den animationTime erhöht pro frame erhöht wird. Gibt somit auch die "Geschwindigkeit" der Animation vor|
|**event**|Enthält den Namen des Events, welches beim drücken ausgeführt werden soll.|
<br>
<br>

#### Methoden
| Name | Aufruf | Beschreibung|Leer|
| --- | --- | --- | --- |
|  update() | jeden Frame | Überschreibt die standard update() Methode!! Führt nach einander updateAnimationValues() und animate() aus| nein |
| animate() | jedes update() | Hier kann festgelegt werden, wie sich der Button bei veränderndem **animationProgress** verhalten soll.| ja|
|  updateAnimationValues() | jedes update() | Wenn **hovered** false ist, wird die **animationTime** um **animationSpeed** reduziert, bis **animationTime** 0 ist. Wenn **hovered** true ist, wird die **animationTime** um **animationSpeed** erhöht, bis **animationTime** 1 ist. Je nach dem ob **hovered** true oder false ist, wird die **animationTime** durch eine Funktion von Util in den Animationsfortschritt umgewandelt und in **animationProgress** gespeichert.| nein |
|  changeEvent(`event`) |custom | Setzt **event** auf `event`.| nein |
| clicked() | Nach dem die Maus geklickt wurde | Überschreibt die clicked() Methode aus InteractiveObject. Ruft über den an das window angehängten Eventdispatcher das zugewiesene **event** auf.| nein|
<br>
<br>
<br>
<br>

### Scene extendes InteractiveObejct

#### Constructor
Der Constructor verlangt **name**. Setzt die **x** und **y** auf 0. **width** und **height**. werden auf die Canvasgröße gesetzt.
<br>
<br>

#### Attribute
|name|Bescheibung|
| --- | --- |
|**name**|Speichert den Namen der Scene ab. Sollte einzigartig sein und in dem ENUM vermerkt sein! |
<br>
<br>

#### Events
|name|Bescheibung|
| --- | --- |
|*restartScene*|Führt restartScene() aus. Soll die ganze Scene neustarten.|
<br>
<br>

#### Methoden
| Name | Aufruf | Beschreibung|Leer|
| --- | --- | --- | --- |
|  restartScene() | beim *restartScene* Event | Führt restart() aus, wenn **enabled** true ist.| nein |
| restart() | nach restartScene() | Hier kann festgelegt werden, wie sich der Button bei veränderndem **animationProgress** verhalten soll.| ja|
<br>
<br>
<br>
<br>

### Game extendes InteractiveObejct

#### Constructor
Der Constructor verlangt **name**. Setzt die **x** und **y** auf 0. **width** und **height**. werden auf die Canvasgröße gesetzt.
<br>
<br>

#### Attribute
|name|Bescheibung|
| --- | --- |
|**name**|Speichert den Namen des Spiels ab.|
|**currentScene**| Enthält den Index der aktuellen Szene im **scenes** Array.|
|**scenes**| Eine Liste mit allen Scene Objekten.|
|**started**| Gibt an ob das Spiel schon gestartet hat.|
|**gameScores**| Speichert die Scores der Untersimulationen ab.|
<br>
<br>

#### Events
|name|Bescheibung|
| --- | --- |
|*nextScene*| Führt nextScene(Szenennamen) aus. Kann einen Szenennamen übergeben.|
|*swtichToMap*| Führt switchToMap(mapState) aus. Muss einen MapStatus beinhalten.|
|*setGameScore*| Führt setGameScore(game,score) aus. Muss einen Szenennamen und ein Array mit den scores beinhalten.|
|*getGameScore*| Führt getGameScore(Objekt) aus. Sollte das Objekt beinhalten, welches das Event aufruft, um diesen alle scores mitzuteilen.|
<br>
<br>

#### Methoden
| Name | Aufruf | Beschreibung|Leer|
| --- | --- | --- | --- |
| init() | beim Starten der Anwendung | Eventdispatcher werden festgelegt.| nein|
| addScene(`scene`) | custom | Hängt die `scene` an das **scenes** Array hinten an.| nein |
| start() | custom | Setzt **started** auf true wenn **scenes** eine mindestlänge von 1 hat. Setzt **currentScene** auf 0 und wechselt auf diese Szene| nein |
|  nextScene(`specific`) | beim *nextScene* Event | Wenn ein Szenenname mitgegeben wird, wird **currentScene** auf den Index der Szene mit diesen Namen gesetzt. Wenn nicht wird **currentScene** um eins erhöht.| nein |
|  getCurrentScene() | custom | Gibt das aktuell ausgewählte Szenen Obejekt zurück.| nein |
|  switchToMap(`mapState`) | custom | Wechselt die Szene auf die Karte und setzt den Status der Karte auf `mapState`| nein |
|  getSceneByName(`name`) | custom | Gibt die Szene mit dem Namen `name` zurück.| nein |
|  getGameScores(`scene`) | custom | Setzt eine Variable scores in der `scene` auf **gameScores**.| nein |
|  setGameScores(`game`,`score`) | custom | Setzt in **gameScores** die scores für `game` auf `score`.| nein |











