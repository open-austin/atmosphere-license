---
layout: layout.liquid
---
The Atmosphere License is an open source, copyleft software license with fossil fuel divestment provisions. It complies with the [Open Source Definition](https://opensource.org/osd) and the [Ethical Source Definition](https://ethicalsource.dev/definition/), and it's designed to impose quantifiable, enforceable obligations. Anyone, and any organization, can qualify to use and to convey programs under the Atmosphere License, and there are no limits on the content or functionality of the licensed programs.

As of version 0.1, the Atmosphere License includes several optional provisions. The license is [available as a template](atmosphere-templates/atmosphere-0.1.md) that shows all the available options.

## Questions about the Atmosphere License

### Why is there also a CC0 license in the Atmosphere License repository?

The Atmosphere License itself is released under a CC0 License. That means you don't need to qualify to be a licensee of Atmosphere Licensed software to release your own software under the Atmosphere License, or even to create new variations on the Atmosphere License. In other words, you don't have to divest from fossil fuels before releasing your own software under the Atmosphere License. However, if someone else modifies your software and licenses the modifications back to you under the Atmosphere License, your use of that modified software will be governed by the Atmosphere License, not the CC0 License. Although you are free to reuse any part of the Atmosphere License, there are [some limitations](https://www.gnu.org/licenses/gpl-faq.html#ModifyGPL) on what you can do with the text that comes from the GNU General Public License (GPL).

### What is the relationship between the Atmosphere License and the GNU General Public License (GPL)?

The Atmosphere License is a separate license that reuses many provisions from the GPL, as [authorized by the Free Software Foundation](https://www.gnu.org/licenses/gpl-faq.html#ModifyGPL). The Atmosphere License and the GPL are mutually incompatible, so neither license authorizes you to incorporate code under one license into software covered by the other license.

### Do I have to divest from fossil fuels before hosting or forking a repository under the Atmosphere License?

No, you don't have to. But you would have to satisfy the divestment provisions before publishing a modified version of the repository (e.g. by publishing your own commits to your own public fork of the repository).

### Do I have to need to divest from fossil fuels before running software under the Atmosphere License on my own computer?

No, you don't have to. You can even modify the code for your own use and run the modified code, but you would have to satisfy the divestment provisions if you wanted to publish those modifications.

### Do I have to need to divest from fossil fuels before running software under the Atmosphere License as a service for other people to use over a network?

If the software runs over the network in its unmodified form, then you can run the verbatim copy and serve it over a network without satisfying the divestment provisions. However, if you need to make any modifications of your own to the software to let users access it over the network, you would have to satisfy the divestment provisions to do so.

### Why is there no provision for relicensing under "any later version" of the Atmosphere License?

An "any later version" clause is only effective when a license is supported by a trusted organization with a clear vision for the future of the license. The Atmosphere License is in such an early stage that it could take a very different direction in the future. It wouldn't be fair to automatically subject licensors to future license provisions that can't yet be predicted.

### Is the Atmosphere License ready to be used to license important software?

The Atmosphere License is new in version 0.1, so it might be best to use it in simpler licensing scenarios until the license has been reviewed for flaws and possibly revised. A simple scenario is one where code is the product of just one contributor, or only a few contributors who share the same values and are able to communicate with each other easily. If the contributors can coordinate with each other easily, that means they can easily relicense their work when a new version of the Atmosphere License is released. But if many different contributors licensed different parts of a single program to each other under the Atmosphere License, that would mean it would be necessary to contact every single contributor and get their permission before relicensing the program under a new version of the Atmosphere License or under a different license.

### I want to use code under a different license in an Atmosphere licensed project. Which licenses are compatible?

Code licensed under permissive open source licenses, such as the MIT License, the BSD licenses other than the original 4-clause BSD license, and the X11 License, is compatible to be included in an Atmosphere licensed project.

Code subject to a public domain dedication, such as Creative Commons 0 (CC0), or the Unlicense, is also compatible to be included.

Code licensed under the Apache License version 2.0 is compatible to be included only if you add an additional phrase "subject to restrictions in Apache License Version 2.0" to the copyright notice. See section 7 ("Additional Terms") in the Atmosphere License.

Code is incompatible if it is licensed under other copyleft licenses like the [GNU GPL](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) or the [GNU Affero GPL](https://www.gnu.org/licenses/agpl-3.0.md).

The [Do No Harm License](https://github.com/raisely/NoHarm) and the [Hippocratic License](https://firstdonoharm.dev/) are other [Ethical Source](https://ethicalsource.dev/definition/) licenses, but they're incompatible with the Atmosphere License.

### I want to use code under an Atmosphere license in a project under a different license. Does the Atmosphere license authorize relicensing under any other license?

No, there are no other known licenses that comply with all the same obligations as the Atmosphere License (other than more restrictive versions of the Atmosphere License itself).

### I want to "dual license" software by making it available either under the Atmosphere License or under a different license. Is this allowed?

Yes. Releasing your own work under the Atmosphere License doesn't limit your rights to release it under any different licenses, including closed-source licenses, incompatible open source licenses, etc.
