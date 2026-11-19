# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/andthods123/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard)
[![reward](https://make.fun/badge/news-image-20261118/andthods123/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

One image summing up Wednesday 18 November 2026 world news, built for the
make.fun news-image-20261118 bounty: a dense front page with 30 verified
stories — the Gulf escalation, the first Trump–Xi–Putin three-way summit in
Shenzhen, Voyager 1 reaching one light-day from Earth — plus a world map.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` (the image, sitting next to it) to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). Deterministic: both runs
write the same bytes.

## The image

`entry.png` is 1024×1024, 304,311 bytes. It was composed with Python/PIL from
three generated editorial illustrations (Gulf missile streaks, the Shenzhen
summit table, Voyager 1) and hand-drawn icons; every headline was checked
against reporting of 18 November 2026 (AP, Reuters, AFP, BBC, Al Jazeera,
NASA).
