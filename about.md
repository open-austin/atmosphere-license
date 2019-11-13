---
layout: layout.liquid
---
# About the Atmosphere Licenses

{% include licenseIntro %}

The licenses and the rest of the content on this website are provided for informational purposes. They are not legal advice and do not create an attorney-client relationship.

## Motivation for the Atmosphere Licenses

On November 5, 2019, a group of 11,258 scientists published a new report called [World Scientists’ Warning of a Climate Emergency](https://doi.org/10.1093/biosci/biz088). Among other stark conclusions, the report found that the "world must quickly implement massive energy efficiency and conservation practices and must replace fossil fuels with low-carbon renewables and other cleaner sources of energy if safe for people and the environment." The signatories of the report included not just climate scientists but also biologists and ecologists. Many scientists are acutely aware of the climate crisis, but they don't feel they have much power to influence other institutions to reduce their emissions.

But scientific research still has enormous economic significance, and access to research-related intellectual property can be vital to universities' reputations. When scientists release open source software, they make a valuable gift to universities, corporations, and others with an economic interest in their research. The purpose of the Atmosphere Licenses is to let licensors attach some strings to their gift of open source software, and create pressure for other institutions to join the fossil fuel divestment movement. However, the Atmosphere licenses try not to be too restrictive. Professionals and academics can read, run, and cite Atmosphere-licensed software as part of their job without worrying about the license. It's only when they want to modify the software that they'll need to think about pressuring their institutions to divest from fossil fuels.

The concept of the Atmosphere licenses was inspired by [the Hippocratic License](https://firstdonoharm.dev/) and the new [Ethical Source Definition](https://ethicalsource.dev/definition/), both by [Coraline Ada Ehmke](http://where.coraline.codes/). However, the conversation around Ethical Source software has mostly assumed it isn't possible for a single license to meet both the Open Source Definition and the Ethical Source Definition. The Hippocratic License doesn't comply with part 6 of the [Open Source Definition](https://opensource.org/osd) ("No Discrimination Against Fields of Endeavor") because it prohibits use of the licensed software to violate the United Nations Universal Declaration of Human Rights. The Atmosphere Licenses avoid that issue because, instead of putting restrictions on use of the software, Atmosphere Licenses put preconditions on relicensing of the software. Preconditions on relicensing have been accepted in open source licensing for a long time, and they aren't prohibited by the Open Source Definition.

Much of the recent discussion about misuse of open source software [has revolved around](https://www.zdnet.com/article/developer-takes-down-ruby-library-after-he-finds-out-ice-was-using-it/) US Immigrations and Customs Enforcement's (ICE) family separation and internment camp policies, as well as related surveillance infrastructure. That's an issue that people might reasonably want to try to address with restrictions on relicensing, and it's certainly related to the climate crisis. But there's also a risk of adding too many provisions to the Atmosphere License and making it too hard to understand. As a compromise, provisions relating to civilian internment are available to add as an optional section by checking the corresponding box on the [License Selector]({{ '/' | url }}) page.

## Questions about the Atmosphere Licenses

### Where is a static document containing all the text of the Atmosphere Licenses for offline use?

[Here.]({{ '/atmosphere-static-0.1/index.html' | url}})

### What is the relationship between the Atmosphere Licenses and the GNU General Public License (GPL)?

The Atmosphere Licenses incorporate many provisions of the [GNU General Public License]("https://www.gnu.org/licenses/old-licenses/gpl-2.0.html), and they also incorporate the [GNU Affero GPL's]("https://www.gnu.org/licenses/agpl-3.0.md") concept of "Remote Network Interaction" as a trigger for license compliance. This reuse is [authorized by the Free Software Foundation](https://www.gnu.org/licenses/gpl-faq.html#ModifyGPL). The Atmosphere Licenses also optionally incorporate the concept of "deforestation" from the [Do No Harm License]("https://github.com/raisely/NoHarm). However, the Atmosphere Licenses are not versions of any of those licenses. The Atmosphere Licenses and the GNU Licenses are mutually incompatible, so you can't incorporate GNU code into Atmosphere projects, and vice versa.

### Do I have to divest from fossil fuels before hosting or forking a repository under an Atmosphere License?

No, you don't have to. But you would have to satisfy the divestment provisions before publishing a modified version of the repository (e.g. by publishing your own commits to your own public fork of the repository).

### Do I have to divest from fossil fuels before running software under an Atmosphere License on my own computer?

No, you don't have to. You can even modify the code for your own use and run the modified code, but you would have to satisfy the divestment provisions if you wanted to publish those modifications.

### Do I have to need to divest from fossil fuels before running software under an Atmosphere License as a service for other people to use over a network?

If the software runs over the network in its unmodified form, then you can run the verbatim copy and serve it over a network without satisfying the divestment provisions. However, if you need to make any modifications of your own to the software to let users access it over the network, you would have to satisfy the divestment provisions to do so.

### Why is there no provision for relicensing under "any later version" of the Atmosphere License?

An "any later version" clause is only effective when a license is supported by a trusted organization with a clear vision for the future of the license. The Atmosphere License is in such an early stage that it could take a very different direction in the future. It wouldn't be fair to automatically subject licensors to unpredictable future changes to the license.

### Is the Atmosphere License ready to be used to license important software?

The Atmosphere License is new in version 0.1, so it might be best to use it in simpler licensing scenarios until the license has been reviewed for flaws and possibly revised. Such a simple scenario might be where code is the product of just one contributor, or only a few contributors who share the same values and are able to communicate with each other easily. If the contributors can coordinate with each other easily, that means they can easily relicense their work when a new version of the Atmosphere License is released. But if many different contributors license different parts of a single program to each other under the Atmosphere License, that would mean it would be necessary to contact every single contributor and get their permission before relicensing the program under a new version of the Atmosphere License or under a different license.

### I want to use code under a different license in an Atmosphere licensed project. Which licenses are compatible?

Code licensed under permissive open source licenses, such as the MIT License, the BSD licenses other than the original 4-clause BSD license, and the X11 License, is compatible to be included in an Atmosphere licensed project.

Code subject to a public domain dedication, such as Creative Commons 0 (CC0), or the Unlicense, is also compatible to be included.

Code licensed under the Apache License version 2.0 is compatible to be included only if you add an additional phrase "subject to restrictions in Apache License Version 2.0" to the copyright notice. See section 7 ("Additional Terms") in the Atmosphere License.

Code is incompatible if it is licensed under other copyleft licenses like the [GNU GPL](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) or the [GNU Affero GPL](https://www.gnu.org/licenses/agpl-3.0.md).

The [Do No Harm License](https://github.com/raisely/NoHarm) and the [Hippocratic License](https://firstdonoharm.dev/) are other [Ethical Source](https://ethicalsource.dev/definition/) licenses, but they're incompatible with the Atmosphere License.

### I want to use code under an Atmosphere license in a project under a different license. Does the Atmosphere license authorize relicensing under any other license?

No, there are no other known licenses that comply with all the same obligations as the Atmosphere License (other than more restrictive versions of the Atmosphere License itself).

### I want to "dual license" my code by making it available either under the Atmosphere License or under a different license. Is this allowed?

Yes. Releasing your own work under the Atmosphere License doesn't limit your rights to release it under any different licenses, including closed-source licenses, incompatible open source licenses, etc.

### Is Atmosphere-licensed code compatible with the terms of use for uploading packages to the Python Package Index (PyPI)?

Yes. PyPI packages must have a license, but those licenses [don't need to grant any rights to derivative works](https://pypi.org/policy/terms-of-use/). Because the Atmosphere Licenses only limit rights to derivative works, they grant more than the minimum rights required for the PyPI.

### Why is there also a CC0 license in the Atmosphere License repository?

The Atmosphere License itself is released under a CC0 License. That means you don't need to qualify to be a licensee of Atmosphere Licensed software to release your own software under the Atmosphere License, or even to create new variations on the Atmosphere License. In other words, you don't have to divest from fossil fuels before releasing your own software under the Atmosphere License. However, if someone else modifies your software and licenses the modifications back to you under the Atmosphere License, your use of that modified software will be governed by the Atmosphere License, not the CC0 License.

### Can I reuse parts of the Atmosphere Licenses to create a different license?

Yes, under the CC0 License, you can do this. Although you are free to reuse any part of the Atmosphere License, there are [some limitations](https://www.gnu.org/licenses/gpl-faq.html#ModifyGPL) on what you can do with the text that comes from the GNU General Public License (GPL). The CC0 License does not include permission for you to use trademarks such as the name "Atmosphere License", so if you create a new license, please give it a different name.
