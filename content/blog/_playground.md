# Playground page

::alert{type="info"}
:bulb: With this article, we will take the example of Nuxt. However, the other frameworks cited are in the same situation and the conclusions of this article are valid for them.
::

::detail{title="Serverless function vs Edge function"}
Une "edge function" est une "serverless function" puisqu'elle s'exécute sur un serveur géré par un tiers et est déclenchée par une requête HTTP.

Une "edge function" a l'avantage d'avoir [un démarrage à froid presque instantané, de l'ordre de la milliseconde](https://mikhail.io/serverless/coldstarts/big3/) par rapport à une "serverless function". De plus, elle s'exécute au plus proche du client, ce qui permet d'obtenir des temps de réponse très faibles.

Cependant, une "edge function" ne peut pas faire plus de 1MB, "node_modules" inclus, ce qui est très limité et demande une certaine rigueur dans le code qui est écrit. De plus, les API disponibles au sein des "edge functions" sont limitées, ce qui nécessite souvent l'écriture de code spécifique.

Une "edge function" est lié à un fournisseur, ce qui rend difficile la migration vers un autre fournisseur et ne peux durer plus que quelques dizaines de millisecondes.

Ainsi, l'adoption des "edge functions" sans être verrouillé est complexe.
::

::alert{type="warning"}
:warning: Le type ne vérifie pas notre configuration. Si nous retirons une propriété de notre fichier `.conf`, le type ne nous avertira pas.

Pour s'assurer que notre configuration contient bien toutes les propriétés attendues, il est possible d'utiliser une solution comme [`zod`](https://zod.dev/).
::

> **Note**
And here some text which may extend over multiple lines and is marked
at the left hand side by a vertical bar in .html rendering.  Depending
on the audience, this visual anchor can be enough.

`import getReadingTime from "reading-time";`{lang="ts"}